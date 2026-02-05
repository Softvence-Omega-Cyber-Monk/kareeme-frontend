import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { useRefreshMutation } from "../features/auth/authApi";
import { LoadingLogo } from "@/components/LoadingLogo";

// Component to handle silent refresh on app startup
const SilentRefresh = ({ children }: { children: React.ReactNode }) => {
  const [refresh] = useRefreshMutation();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        console.log("🚀 [Startup] Checking for existing session...");
        // Try to refresh token using HttpOnly cookie
        await refresh().unwrap();
        console.log("✅ [Startup] Session restored.");
      } catch {
        // If refresh fails, user stays logged out (expected behavior)
        console.log("ℹ️ [Startup] No active session found.");
      } finally {
        setIsInitialized(true);
      }
    };

    initializeAuth();
  }, [refresh]);

  // Show loading state while checking for existing session
  if (!isInitialized) {
    return <LoadingLogo />;
  }

  return <>{children}</>;
};

const ReduxProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SilentRefresh>{children}</SilentRefresh>
      </PersistGate>
    </Provider>
  );
};

export default ReduxProviderWrapper;

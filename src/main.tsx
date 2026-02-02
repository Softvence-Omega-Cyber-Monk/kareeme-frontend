import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import ReduxProviderWrapper from "./redux/readux-provider/reduxProviderWrapper.tsx";
import { DashboardToaster } from "./components/ui/Toaster.tsx";
import { CartProvider } from "./contexts/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ReduxProviderWrapper>
        <CartProvider>
          <RouterProvider router={routes} />
          <DashboardToaster />
        </CartProvider>
      </ReduxProviderWrapper>
    </Provider>
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import "./index.css";

// import { CartProvider } from "./contexts/CartContext";
// import routes from "./routes/Routes";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <CartProvider>
//       <RouterProvider router={routes} />
//     </CartProvider>
//   </React.StrictMode>
// );

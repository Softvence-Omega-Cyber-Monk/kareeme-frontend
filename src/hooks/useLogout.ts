import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { logout, selectCurrentRefreshToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/redux-hook";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { baseApi } from "@/redux/hooks/baseApi";

export const useLogout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [logoutApi, { isLoading }] = useLogoutMutation();
    const refreshToken = useAppSelector(selectCurrentRefreshToken);

    const handleLogout = async () => {
        try {
            if (refreshToken) {
                await logoutApi({ refreshToken }).unwrap();
            }
        } catch (error) {
            console.error("Logout failed at backend", error);
            // We continue to client-side logout anyway
        } finally {
            dispatch(logout());
            dispatch(baseApi.util.resetApiState());
            toast.success("Logged out successfully");
            navigate("/login", { replace: true });
        }
    };

    return { handleLogout, isLoading };
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbarConfig } from "@/store/slices/snackbar";
import { setDefaultStatus } from "@/store/slices/user";

const useUser = () => {
    const { currentUser, status, error, success } = useSelector(
        ({ user }) => user
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "success") {
            dispatch(
                setSnackbarConfig({
                    open: true,
                    type: "success",
                    message: success,
                })
            );
            dispatch(setDefaultStatus());
        }
        if (status === "failed") {
            dispatch(
                setSnackbarConfig({
                    open: true,
                    type: "error",
                    message: error,
                })
            );
            dispatch(setDefaultStatus());
        }
    }, [status]);

    return currentUser;
};

export default useUser;

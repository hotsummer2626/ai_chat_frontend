import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbarConfig } from "@/store/slices/snackbar";
import { setDefaultStatus } from "@/store/slices/message";

const useMessage = () => {
    const { status, error } = useSelector(({ message }) => message);
    const dispatch = useDispatch();

    useEffect(() => {
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
};

export default useMessage;

import React from "react";
import MuiSnackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { setSnackbarConfig } from "@/store/slices/snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snackbar = () => {
    const { open, type, message } = useSelector(({ snackbar }) => snackbar);
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        dispatch(
            setSnackbarConfig({
                open: false,
            })
        );
    };

    return (
        <MuiSnackbar
            open={open}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={handleClose}
        >
            <Alert severity={type} sx={{ width: "100%" }} onClose={handleClose}>
                {message}
            </Alert>
        </MuiSnackbar>
    );
};

export default Snackbar;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    type: "success",
    message: "",
};

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        setSnackbarConfig(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { setSnackbarConfig } = snackbarSlice.actions;

export default snackbarSlice;

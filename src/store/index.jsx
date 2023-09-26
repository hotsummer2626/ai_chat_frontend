import { configureStore } from "@reduxjs/toolkit";
import snackbarSlice from "./slices/snackbar";
import userSlice from "./slices/user";
import messageSlice from "./slices/message";

const store = configureStore({
    reducer: {
        snackbar: snackbarSlice.reducer,
        user: userSlice.reducer,
        message: messageSlice.reducer,
    },
});

export default store;

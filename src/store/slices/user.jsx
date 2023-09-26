import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "@/services/user";

const initialState = () => {
    const user = localStorage.getItem("user");
    const expireTime = +localStorage.getItem("expireTime");
    return {
        currentUser: user ? JSON.parse(user) : null,
        expireTime: expireTime || 0,
        status: "idle",
        error: null,
        success: null,
    };
};

export const userLogin = createAsyncThunk(
    "user/login",
    async (payload, thunkAPI) => {
        try {
            const response = await login(payload);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setDefaultStatus(state, action) {
            state.status = "idle";
        },
        logout(state, action) {
            state.currentUser = null;
            state.expireTime = 0;
            state.status = "idle";
            state.error = null;
            state.success = null;
            localStorage.removeItem("user");
            localStorage.removeItem("expireTime");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.status = "pending";
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = "success";
                state.currentUser = action.payload;
                const currentTime = Date.now();
                const timeout = 1000 * 60 * 60 * 24 * 7;
                state.expireTime = currentTime + timeout;
                localStorage.setItem("user", JSON.stringify(state.currentUser));
                localStorage.setItem(
                    "expireTime",
                    JSON.stringify(state.expireTime)
                );
                state.success = "Successfully login";
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { logout, setMessages, setDefaultStatus } = userSlice.actions;

export default userSlice;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAIResponse } from "@/services/openai";

const initialState = () => {
    const messages = localStorage.getItem("messages");

    return {
        messages: messages ? JSON.parse(messages) : null,
        status: "idle",
        error: null,
    };
};

export const getMessage = createAsyncThunk(
    "message/getMessage",
    async (payload, thunkAPI) => {
        try {
            const response = await getAIResponse(payload);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setDefaultStatus(state, action) {
            state.status = "idle";
        },
        setMessages(state, action) {
            const messages = state.messages || [];
            state.messages = [...messages, action.payload];
            localStorage.setItem("messages", JSON.stringify(state.messages));
        },
        setDefaultMessages(state, action) {
            state.messages = null;
            state.status = "idle";
            state.error = null;
            localStorage.removeItem("messages");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMessage.pending, (state) => {
                state.status = "pending";
            })
            .addCase(getMessage.fulfilled, (state, action) => {
                state.status = "success";
                state.messages = [...state.messages, action.payload.message];
                localStorage.setItem(
                    "messages",
                    JSON.stringify(state.messages)
                );
            })
            .addCase(getMessage.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { setMessages, setDefaultStatus, setDefaultMessages } =
    messageSlice.actions;

export default messageSlice;

import request from "@/utils/request";

export const getAIResponse = (payload) =>
    request({
        method: "POST",
        url: "/openai",
        data: payload,
    });

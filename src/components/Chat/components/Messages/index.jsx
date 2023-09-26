import styled, { css } from "styled-components";
import Loading from "@/components/shares/Loading";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import scrollbar from "@/styles/scrollbar";
import { colors } from "@/styles/variables";

const { primaryColor } = colors;

const Container = styled.div`
    padding: 20px 15px;
    overflow: auto;
    background: #f5f6f2;
    ${scrollbar()}
`;

const Message = styled.div`
    max-width: 300px;
    width: max-content;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 6px;
    ${({ role }) => {
        if (role === "user") {
            return css`
                background: ${primaryColor};
                color: #fff;
                margin-left: auto;
            `;
        }
        if (role === "assistant") {
            return css`
                background: #fff;
                color: #000;
            `;
        }
    }}
`;

const Messages = () => {
    const { messages, status } = useSelector(({ message }) => message);

    useEffect(() => {
        const elements = document.querySelectorAll(".message");
        if (elements.length !== 0) {
            elements[elements.length - 1].scrollIntoView({
                behavior: "smooth",
            });
        }
    }, [messages]);

    return (
        <Container>
            {messages &&
                messages.map((message, index) => (
                    <Message
                        key={index}
                        role={message.role}
                        className="message"
                    >
                        {message.content}
                    </Message>
                ))}
            {status === "pending" && <Loading />}
        </Container>
    );
};

export default Messages;

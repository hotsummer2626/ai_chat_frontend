import styled from "styled-components";
import Header from "./components/Header";
import Messages from "./components/Messages";
import Input from "./components/Input";
import { useFadeIn } from "@/hooks/useFadeIn";

const Container = styled.div`
    display: grid;
    grid-template-rows: 70px auto 150px;
    height: 600px;
    opacity: ${({ isShow }) => (isShow ? "1" : "0")};
    transition: 1s ease;
`;

const Chat = () => {
    const isShow = useFadeIn()

    return (
        <Container isShow={isShow}>
            <Header />
            <Messages />
            <Input />
        </Container>
    );
};

export default Chat;

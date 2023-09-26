import React from "react";
import "./styles/global.scss";
import styled from "styled-components";
import Auth from "./components/Auth";
import Nav from "./components/Nav";
import Chat from "./components/Chat";
import Snackbar from "@/components/shares/Snackbar";
import useUser from "@/hooks/useUser";
import useMessage from "@/hooks/useMessage";

const Container = styled.div`
    margin: 50px auto;
    max-width: ${({ isLogin }) => (isLogin ? "900px" : "400px")};
    height: ${({ isLogin }) => (isLogin ? "600px" : "max-content")};
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: ${({ isLogin }) => (isLogin ? "grid" : "block")};
    grid-template-columns: 1fr 10fr;
    overflow: hidden;
    transition: 0.3s ease;
`;

const App = () => {
    const currentUser = useUser();
    useMessage();

    return (
        <>
            <Container isLogin={!!currentUser}>
                {!!currentUser ? (
                    <>
                        <Nav />
                        <Chat />
                    </>
                ) : (
                    <Auth />
                )}
            </Container>
            <Snackbar />
        </>
    );
};

export default App;

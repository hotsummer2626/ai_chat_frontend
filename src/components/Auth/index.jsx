import styled from "styled-components";
import Register from "./components/Register";
import Login from "./components/Login";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const Container = styled.div`
    opacity: ${({ isShow }) => (isShow ? "1" : "0")};
    transition: 1s ease;
`;

const Image = styled.img`
    width: 100%;
    height: 250px;
    margin-bottom: 10px;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 30px;
`;

const Auth = () => {
    const isShow = useFadeIn();
    const [isLoginForm, setIsLoginForm] = useState(true);

    return (
        <Container isShow={isShow}>
            <Image src={logo} alt="logo" />
            <Title>{isLoginForm ? "Login" : "Register"}</Title>
            {isLoginForm ? (
                <Login setIsLoginForm={setIsLoginForm} />
            ) : (
                <Register setIsLoginForm={setIsLoginForm} />
            )}
        </Container>
    );
};

export default Auth;

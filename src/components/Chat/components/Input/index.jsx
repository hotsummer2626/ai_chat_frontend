import styled from "styled-components";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage, setMessages } from "@/store/slices/message";

const Container = styled.div`
    padding: 20px 15px;
    overflow: auto;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    font-size: 20px;
`;

const Input = () => {
    const [inputText, setInputText] = useState("");
    const { status } = useSelector(({ message }) => message);
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setInputText(e.target.value);
    };

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13 && inputText.trim() !== "") {
            e.preventDefault();
            dispatch(
                setMessages({
                    role: "user",
                    content: inputText.trim(),
                })
            );
            dispatch(
                getMessage({
                    message: {
                        role: "user",
                        content: inputText.trim(),
                    },
                })
            );
            setInputText("");
        }
    };

    return (
        <Container>
            <Textarea
                value={inputText}
                minRows={4}
                placeholder="What do you want to ask..."
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                disabled={status === "pending"}
            />
        </Container>
    );
};

export default Input;

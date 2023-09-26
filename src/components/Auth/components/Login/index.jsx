import styled from "styled-components";
import TextInput from "@/components/shares/TextInput";
import PasswordInput from "@/components/shares/PasswordInput";
import Button from "@/components/shares/Button";
import { isEmail } from "@/utils/validators";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "@/store/slices/user";
import { colors } from "@/styles/variables";

const { primaryColor } = colors;

const Form = styled.form`
    padding: 0 20px;
`;

const Reminder = styled.div`
    text-align: center;
    padding-bottom: 20px;
    span {
        color: ${primaryColor};
        font-weight: bold;
        cursor: pointer;
    }
`;

const inputList = [
    { key: "email", label: "Email" },
    { key: "password", label: "Password" },
];

const Login = ({ setIsLoginForm }) => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [validatorMessages, setValidatorMessages] = useState([]);
    const { status } = useSelector(({ user }) => user);
    const dispatch = useDispatch();

    const onChangeHandler = (key) => (e) => {
        const hasErrorMessage = validatorMessages.find(
            (item) => item.key === key
        );

        if (hasErrorMessage) {
            setValidatorMessages((prevValidatorMessages) =>
                prevValidatorMessages.filter((item) => item.key !== key)
            );
        }

        setFormValues((prev) => ({
            ...prev,
            [key]: e.target.value,
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const { email, password } = formValues;
        const errorMessages = [];

        if (!email || !password) {
            for (const inputItem of inputList) {
                if (!formValues[inputItem.key]) {
                    errorMessages.push({
                        key: inputItem.key,
                        message: "required",
                    });
                }
            }
        }
        if (email && !isEmail(email)) {
            errorMessages.push({
                key: "email",
                message: "Invalid email",
            });
        }

        setValidatorMessages(errorMessages);

        if (errorMessages.length === 0) {
            dispatch(userLogin({ email, password }));
        }
    };

    return (
        <Form onSubmit={onSubmitHandler}>
            {inputList.map((inputItem) => {
                if (inputItem.key === "email") {
                    return (
                        <TextInput
                            key={inputItem.key}
                            label={inputItem.label}
                            autoComplete="email"
                            onChange={onChangeHandler(inputItem.key)}
                            error={validatorMessages.find(
                                (item) => item.key === inputItem.key
                            )}
                        />
                    );
                } else {
                    return (
                        <PasswordInput
                            key={inputItem.key}
                            label={inputItem.label}
                            onChange={onChangeHandler(inputItem.key)}
                            error={validatorMessages.find(
                                (item) => item.key === inputItem.key
                            )}
                        />
                    );
                }
            })}
            <Button loading={status === "pending"}>Login</Button>
            <Reminder>
                Don't have an account yet?{" "}
                <span onClick={() => setIsLoginForm(false)}>Register</span>
            </Reminder>
        </Form>
    );
};

export default Login;

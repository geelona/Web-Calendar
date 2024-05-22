import "./register.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { ValidateEmail } from "../../utils/validation/emailValidation";
import { ValidatePassword } from "../../utils/validation/passwordValidation";
import { ValidateRepeatPassword } from "../../utils/validation/repeatPasswordValidation";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../contexts/AuthContext";

export default function Register() {
    const navigate = useNavigate();
    const { signup } = useAuth();

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    const [repeatPassword, setRepeatPassword] = useState("");
    const [repeatPasswordError, setRepeatPasswordError] = useState(false);
    const [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage] =
        useState("");

    const [loading, setLoading] = useState(false);

    async function SubmitForm() {
        if (ValidateForm()) {
            try {
                setLoading(true);
                await signup(email, password);
                navigate("/calendar");
            } catch (error: any) {
                alert(error.message);
            }
            setLoading(false);
        }
    }

    function ValidateForm() {
        const emailValid = ValidateEmail(
            email,
            setEmailError,
            setEmailErrorMessage
        );
        const passwordValid = ValidatePassword(
            password,
            setPasswordError,
            setPasswordErrorMessage
        );
        const repeatPasswordValid = ValidateRepeatPassword(
            repeatPassword,
            password,
            setRepeatPasswordError,
            setRepeatPasswordErrorMessage
        );

        return emailValid && passwordValid && repeatPasswordValid;
    }

    return (
        <div className="register-page">
            <header>
                <h1>Register</h1>
                <Button
                    label="Login"
                    color="primary"
                    withIcon={false}
                    disabled={false}
                    onClick={() => {
                        navigate("/login");
                    }}
                />
            </header>
            <div className="form">
                <Input
                    value={email}
                    setValue={setEmail}
                    FieldName="Email"
                    FieldType="email"
                    ErrorMessage={emailErrorMessage}
                    Placeholder="Enter email"
                    IsErrored={emailError}
                    Disabled={false}
                />
                <Input
                    value={password}
                    setValue={setPassword}
                    FieldName="Password"
                    FieldType="password"
                    ErrorMessage={passwordErrorMessage}
                    Placeholder="Enter password"
                    IsErrored={passwordError}
                    Disabled={false}
                />
                <Input
                    value={repeatPassword}
                    setValue={setRepeatPassword}
                    FieldName="Repeat Password"
                    FieldType="password"
                    ErrorMessage={repeatPasswordErrorMessage}
                    Placeholder="Repeat Password"
                    IsErrored={repeatPasswordError}
                    Disabled={false}
                />
                <Button
                    label="Register"
                    color="primary"
                    withIcon={false}
                    disabled={loading}
                    onClick={SubmitForm}
                />
            </div>
        </div>
    );
}

import "./login.scss";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";

import { ValidateEmail } from "../../utils/validation/emailValidation";
import { ValidatePassword } from "../../utils/validation/passwordValidation";

import { useAuth } from "../../contexts/AuthContext";
import { set } from "firebase/database";

export default function Login() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    async function SubmitForm() {
        if (ValidateForm()) {
            try {
                setLoading(true);
                await login(email, password);
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

        return emailValid && passwordValid;
    }

    return (
        <div className="login-page">
            <header>
                <h1>Login</h1>
                <Button
                    label="Register"
                    color="primary"
                    withIcon={false}
                    disabled={false}
                    onClick={() => {
                        navigate("/register");
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
                <Button
                    label="Login"
                    color="primary"
                    withIcon={false}
                    disabled={loading}
                    onClick={SubmitForm}
                />
            </div>
        </div>
    );
}

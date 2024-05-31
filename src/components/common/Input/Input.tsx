import propTypes from "prop-types";
import "./Input.scss";
import { useRef } from "react";

function Input({
    FieldName,
    FieldType,
    ErrorMessage,
    Placeholder,
    IsErrored,
    Disabled,
    value,
    setValue,
    fullwidth,
}: {
    FieldName: string;
    FieldType: string;
    ErrorMessage: string;
    Placeholder: string;
    IsErrored: boolean;
    Disabled: boolean;
    value?: string;
    setValue?: (value: string) => void;
    fullwidth?: boolean;
}) {
    const InputRef = useRef<HTMLInputElement>(null);
    const eyeIconRef = useRef<HTMLImageElement>(null);

    const changeVisibility = () => {
        if (!Disabled) {
            if (InputRef.current?.type === "password") {
                InputRef.current!.type = "text";
                eyeIconRef.current!.src = "/components/Input/eye-opened.png";
            } else {
                InputRef.current!.type = "password";
                eyeIconRef.current!.src = "/components/Input/eye-closed.png";
            }
        }
    };

    return (
        <div className="default-input">
            <label
                className={Disabled ? "disabled-lable" : ""}
                htmlFor={FieldName}
            >
                {FieldName}
            </label>
            <div style={{ minWidth: fullwidth ? "100%" : "" }}>
                <input
                    defaultValue={value}
                    onChange={(e) => setValue && setValue(e.target.value)}
                    ref={InputRef}
                    type={FieldType}
                    id={FieldName}
                    placeholder={Placeholder}
                    className={IsErrored ? "error-input" : ""}
                    disabled={Disabled}
                    style={{
                        ...(InputRef.current?.type === "password"
                            ? { paddingRight: "1.5vw" }
                            : {}),
                    }}
                />
                {FieldType === "password" && (
                    <button
                        className={
                            "input-eye-button " +
                            (Disabled ? "disabled-input-eye-button" : "")
                        }
                        onClick={changeVisibility}
                    >
                        <img
                            ref={eyeIconRef}
                            src="/components/Input/eye-closed.png"
                        />
                    </button>
                )}
            </div>
            <span className={IsErrored ? "error-message" : ""}>
                {ErrorMessage}
            </span>
        </div>
    );
}

Input.propTypes = {
    value: propTypes.string,
    setValue: propTypes.func,
    FieldName: propTypes.string.isRequired,
    FieldType: propTypes.oneOf(["text", "password", "email"]).isRequired,
    ErrorMessage: propTypes.string.isRequired,
    Placeholder: propTypes.string.isRequired,
    IsErrored: propTypes.bool,
    Disabled: propTypes.bool,
};

export default Input;

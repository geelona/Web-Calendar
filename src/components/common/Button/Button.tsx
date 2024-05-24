import propTypes from "prop-types";
import "./Button.scss";

function Button({
    label,
    color,
    withIcon,
    disabled,
    onClick,
    fontSize,
    customIcon,
    fullWidth,
}: {
    label: string;
    color: string;
    withIcon?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    fontSize?: number;
    customIcon?: string;
    fullWidth?: boolean;
}) {
    return (
        <button
            className={"default-button " + "button-" + color}
            disabled={disabled}
            onClick={onClick}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            <p style={{ fontSize: fontSize + "vw" }}>{label}</p>
            {withIcon && <img src="/components/Button/icon.png" alt="icon" />}
            {customIcon && !withIcon && (
                <img
                    style={{ filter: "invert(0)" }}
                    src={customIcon}
                    alt="icon"
                />
            )}
        </button>
    );
}

Button.propTypes = {
    label: propTypes.string.isRequired,
    color: propTypes.oneOf(["primary", "secondary"]).isRequired,
    withIcon: propTypes.bool.isRequired,
    disabled: propTypes.bool.isRequired,
    onClick: propTypes.func,
    fontSize: propTypes.number,
    customIcon: propTypes.string,
    focused: propTypes.bool,
    turnFocusOff: propTypes.func,
    fullWidth: propTypes.bool,
};

export default Button;

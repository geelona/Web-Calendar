import propTypes from "prop-types";
import "./Button.scss";

function Button({
    label,
    color,
    withIcon,
    disabled,
}: {
    label: string;
    color: string;
    withIcon?: boolean;
    disabled?: boolean;
}) {
    return (
        <button
            className={"default-button " + "button-" + color}
            disabled={disabled}
        >
            {label}
            {withIcon && <img src="/components/Button/icon.png" alt="icon" />}
        </button>
    );
}

Button.propTypes = {
    label: propTypes.string.isRequired,
    color: propTypes.oneOf(["primary", "secondary"]).isRequired,
    withIcon: propTypes.bool.isRequired,
    disabled: propTypes.bool.isRequired,
};

export default Button;

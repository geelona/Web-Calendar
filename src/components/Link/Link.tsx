import propTypes from "prop-types";
import "./Link.scss";

function Link({
    label,
    href,
    disabled,
}: {
    label: string;
    href: string;
    disabled?: boolean;
}) {
    return (
        <a
            href={href}
            className={disabled ? "link-disabled" : ""}
            onClick={(e) => {
                !href || disabled ? e.preventDefault() : null;
            }}
        >
            {label}
        </a>
    );
}

Link.propTypes = {
    label: propTypes.string.isRequired,
    href: propTypes.string.isRequired,
    disabled: propTypes.bool.isRequired,
};

export default Link;

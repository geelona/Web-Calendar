import propTypes from "prop-types";
import "./Toast.scss";
import { useRef } from "react";

function Toast({
    text,
    maxWidth,
    visible,
}: {
    text: string;
    maxWidth: string;
    visible: boolean;
}) {
    const toastRef = useRef<HTMLDivElement>(null);
    console.log(visible, toastRef);
    !visible
        ? toastRef.current?.classList.add("toast-container--inactive")
        : toastRef.current?.classList.remove("toast-container--inactive");

    return (
        <div ref={toastRef} className={"toast-container"}>
            <p style={{ maxWidth }}>{text}</p>
            <button
                onClick={() => {
                    toastRef.current?.classList.toggle(
                        "toast-container--inactive"
                    );
                }}
            >
                <img src="/components/Toast/close.png" />
            </button>
        </div>
    );
}

Toast.propTypes = {
    text: propTypes.string.isRequired,
    maxWidth: propTypes.string,
    visible: propTypes.bool.isRequired,
};

export default Toast;

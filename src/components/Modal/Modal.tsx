import propTypes from "prop-types";
import "./Modal.scss";
import { useRef } from "react";

function Modal({
    title,
    text,
    isOpen,
    maxWidth,
}: {
    title: string;
    text: string;
    isOpen: boolean;
    maxWidth: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    isOpen
        ? containerRef.current?.classList.remove("modal-container--hide")
        : containerRef.current?.classList.add("modal-container--hide");
    return (
        <div
            ref={containerRef}
            className="modal-container"
            style={{ maxWidth }}
        >
            <div className="modal-header">
                <h1>{title}</h1>
                <button
                    onClick={() => {
                        containerRef.current!.classList.toggle(
                            "modal-container--hide"
                        );
                    }}
                >
                    <img src="/components/Modal/close.png" />
                </button>
            </div>
            <div className="modal-body">{text}</div>
        </div>
    );
}

Modal.propTypes = {
    title: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    isOpen: propTypes.bool.isRequired,
    maxWidth: propTypes.string.isRequired,
};

export default Modal;

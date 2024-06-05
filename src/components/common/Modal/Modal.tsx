import propTypes from "prop-types";
import "./Modal.scss";
import { useRef } from "react";

function Modal({
    title,
    children,
    onClose,
    maxWidth,
    className,
}: {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    maxWidth?: string;
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div
            ref={containerRef}
            className={"modal-container" + (className ? ` ${className}` : "")}
            style={{ maxWidth }}
        >
            <div className="modal-header">
                <h1>{title}</h1>
                <button
                    onClick={() => {
                        onClose();
                    }}
                >
                    <img src="/components/Modal/close.png" />
                </button>
            </div>
            <div className="modal-body">{children}</div>
        </div>
    );
}

Modal.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
    onClose: propTypes.func.isRequired,
    maxWidth: propTypes.string,
    className: propTypes.string,
};

export default Modal;

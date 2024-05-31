import propTypes from "prop-types";

import { useState, useEffect, useRef } from "react";

import "./Textarea.scss";

function Textarea({
    Label,
    Placeholder,
    value,
    setValue,
}: {
    Label: string;
    Placeholder: string;
    value: string;
    setValue: (value: string) => void;
}) {
    const textarea = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        textarea.current!.style.height = "auto";
        const scrollHeight = textarea.current!.scrollHeight;
        const vwHeight = (scrollHeight / window.innerWidth) * 100;
        if (vwHeight > 20) {
            textarea.current!.style.height = "20vw";
        } else {
            textarea.current!.style.height = `${vwHeight}vw`;
        }
    }, [textarea.current?.value]);

    return (
        <div className="textarea-container">
            <label>{Label}</label>
            <textarea
                ref={textarea}
                placeholder={Placeholder}
                defaultValue={value}
                onChange={() => setValue(textarea.current?.value as string)}
                rows={1}
            ></textarea>
        </div>
    );
}

Textarea.propTypes = {
    Label: propTypes.string.isRequired,
    Placeholder: propTypes.string.isRequired,
};

export default Textarea;

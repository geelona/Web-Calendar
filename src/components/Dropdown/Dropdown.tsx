import propTypes from "prop-types";
import "./Dropdown.scss";
import { useRef } from "react";

function Dropdown({
    options,
    selectDefault,
    fontSize,
}: {
    options: string[];
    selectDefault: string;
    fontSize?: number;
}) {
    const selectRef = useRef<HTMLParagraphElement>(null);
    const optionsContainer = useRef<HTMLDivElement>(null);
    const imageToRotateRef = useRef<HTMLImageElement>(null);
    const selectButtonRef = useRef<HTMLButtonElement>(null);

    const handleSelect = () => {
        optionsContainer.current?.classList.toggle("options-container--active");
        imageToRotateRef.current?.classList.toggle("img--rotate");
        selectButtonRef.current?.classList.toggle("select--pressed");
    };

    const handleOptionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        clearActive();
        (event.target as HTMLButtonElement).classList.add("option--selected");
        selectRef.current!.innerText = (
            event.target as HTMLButtonElement
        ).innerText;
        handleSelect();
    };

    const clearActive = () => {
        const options = optionsContainer.current?.querySelectorAll(".option");
        options?.forEach((option) => {
            option.classList.remove("option--selected");
        });
    };

    return (
        <div className="dropdown-menu-container">
            <button
                ref={selectButtonRef}
                className="select"
                onClick={handleSelect}
            >
                <p
                    style={fontSize ? { fontSize: fontSize + "vw" } : {}}
                    ref={selectRef}
                >
                    {selectDefault}
                </p>
                <img
                    ref={imageToRotateRef}
                    src="/components/Dropdown/icon.png"
                />
            </button>
            <div ref={optionsContainer} className="options-container">
                {options.map((option, index) => {
                    return (
                        <button
                            key={index}
                            className="option"
                            onClick={handleOptionClick}
                            style={
                                fontSize ? { fontSize: fontSize + "vw" } : {}
                            }
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

Dropdown.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    selectDefault: propTypes.string.isRequired,
    fontSize: propTypes.number,
};

export default Dropdown;

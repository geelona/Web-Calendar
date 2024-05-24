import propTypes from "prop-types";
import "./SelectMenu.scss";
import { useRef } from "react";

function SelectMenu({
    label,
    options,
    selectDefault,
}: {
    label: string;
    options: string[];
    selectDefault: string;
}) {
    const selectRef = useRef<HTMLButtonElement>(null);
    const optionsContainer = useRef<HTMLDivElement>(null);

    const handleSelect = () => {
        optionsContainer.current?.classList.toggle("options-container--active");
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
        <div className="select-menu-container">
            <label>{label}</label>
            <button ref={selectRef} className="select" onClick={handleSelect}>
                {selectDefault}
            </button>
            <div ref={optionsContainer} className="options-container">
                {options.map((option, index) => {
                    return (
                        <button
                            key={index}
                            className="option"
                            onClick={handleOptionClick}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

SelectMenu.propTypes = {
    label: propTypes.string.isRequired,
    options: propTypes.arrayOf(propTypes.string).isRequired,
    selectDefault: propTypes.string.isRequired,
};

export default SelectMenu;

import propTypes, { object } from "prop-types";
import "./SelectMenu.scss";
import { ReactNode, useRef } from "react";

function SelectMenu({
    label,
    options,
    selectDefault,
    fullWidth,
    setValue,
    width,
    ifCalendarOptions,
}: {
    label: string;
    options: ReactNode[];
    selectDefault: string;
    fullWidth?: true;
    setValue?: (value: string) => void;
    width?: string;
    ifCalendarOptions?: boolean;
}) {
    const selectRef = useRef<HTMLButtonElement>(null);
    const optionsContainer = useRef<HTMLDivElement>(null);

    const handleSelect = () => {
        optionsContainer.current?.classList.toggle("options-container--active");
    };

    const handleOptionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        clearActive();
        (event.target as HTMLButtonElement).classList.add("option--selected");
        const firstChild = event.currentTarget.firstChild as HTMLElement; // Cast firstChild to HTMLElement
        selectRef.current!.innerHTML = firstChild.outerHTML;
        if (setValue) {
            if (ifCalendarOptions) {
                const calendarID = firstChild.getAttribute("calendar-id");
                setValue(calendarID!);
            } else {
                setValue((event.target as HTMLButtonElement).innerText);
            }
        }
        handleSelect();
    };

    const clearActive = () => {
        const options = optionsContainer.current?.querySelectorAll(".option");
        options?.forEach((option) => {
            option.classList.remove("option--selected");
        });
    };

    function renderOptions() {
        return options.map((option, index) => (
            <button key={index} className="option" onClick={handleOptionClick}>
                {option}
            </button>
        ));
    }

    return (
        <div
            className="select-menu-container"
            style={
                width
                    ? { width: width }
                    : fullWidth
                      ? { width: "100%" }
                      : undefined
            }
        >
            <label>{label}</label>
            <button ref={selectRef} className="select" onClick={handleSelect}>
                {selectDefault}
            </button>
            <div ref={optionsContainer} className="options-container">
                <div className="options-container__overflow-container">
                    {renderOptions()}
                </div>
            </div>
        </div>
    );
}

SelectMenu.propTypes = {
    label: propTypes.string.isRequired,
    options: propTypes.arrayOf(propTypes.node).isRequired,
    selectDefault: propTypes.string.isRequired,
};

export default SelectMenu;

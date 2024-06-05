import "./ColorPicker.scss";

interface ColorPickerProps {
    changeColor?: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ changeColor }) => {
    function setColorHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const label = e.target.nextElementSibling as HTMLLabelElement;
        const styles = window.getComputedStyle(label, "::after");
        const background = styles.getPropertyValue("background-color");
        changeColor && changeColor(background);
    }

    return (
        <div className="color-picker-container">
            <label>Colour</label>
            <div className="colors">
                {Array.from({ length: 12 }, (_, index) => (
                    <div key={index} className="color-container">
                        <input
                            type="radio"
                            id={"color" + index}
                            name="color"
                            onChange={setColorHandler}
                        />
                        <label
                            className={"color" + index}
                            htmlFor={"color" + index}
                        ></label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPicker;

import "./ColorPicker.scss";

function ColorPicker() {
    return (
        <div className="color-picker-container">
            <label>Colour</label>
            <div className="colors">
                {Array.from({ length: 12 }, (_, index) => (
                    <div key={index} className="color-container">
                        <input type="radio" id={"color" + index} name="color" />
                        <label
                            className={"color" + index}
                            htmlFor={"color" + index}
                        ></label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ColorPicker;

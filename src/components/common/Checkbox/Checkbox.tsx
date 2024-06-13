import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./Checkbox.scss";

function Checkbox({
    LabelOn,
    Label,
    uniqueKey,
    color,
    checkedValue,
    onChange,
    fontSize,
}: {
    LabelOn: boolean;
    Label: string;
    uniqueKey?: string;
    color?: string;
    checkedValue?: boolean;
    onChange?: () => void;
    fontSize?: string;
}) {
    const [isChecked, setIsChecked] = useState(checkedValue || false);

    useEffect(() => {
        setIsChecked(checkedValue || false);
    }, [checkedValue]);

    const handleCheckboxChange = () => {
        onChange && onChange();
    };

    const checkboxStyle = {
        borderColor: color,
        backgroundColor: isChecked ? color : "transparent",
    };

    const checkmarkStyle = {
        display: isChecked ? "block" : "none",
    };

    return (
        <div className="checkbox-container">
            <div className="checkbox-container__input">
                <input
                    id={uniqueKey}
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    style={checkboxStyle}
                    checked={checkedValue}
                />
                <img
                    src="/components/Checkbox/check-mark.png"
                    style={checkmarkStyle}
                />
            </div>
            {LabelOn && (
                <label
                    style={{ fontSize: fontSize ? fontSize : "" }}
                    htmlFor={uniqueKey}
                >
                    {Label}
                </label>
            )}
        </div>
    );
}

Checkbox.propTypes = {
    LabelOn: PropTypes.bool,
    Label: PropTypes.string,
    uniqueKey: PropTypes.string.isRequired,
    color: PropTypes.string,
    checkedValue: PropTypes.bool,
    onChange: PropTypes.func,
    fontSize: PropTypes.string,
};

export default Checkbox;

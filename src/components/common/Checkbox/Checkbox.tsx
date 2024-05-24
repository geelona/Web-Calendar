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
}: {
    LabelOn: boolean;
    Label: string;
    uniqueKey: string;
    color: string;
    checkedValue: boolean;
    onChange: () => void;
}) {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(checkedValue);
    }, [checkedValue]);

    const handleCheckboxChange = () => {
        onChange();
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
            {LabelOn && <label htmlFor={uniqueKey}>{Label}</label>}
        </div>
    );
}

Checkbox.propTypes = {
    LabelOn: PropTypes.bool,
    Label: PropTypes.string,
    uniqueKey: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default Checkbox;

import propTypes from "prop-types";
import "./Checkbox.scss";

function Checkbox({ LabelOn, Label }: { LabelOn: boolean; Label: string }) {
    return (
        <div className="checkbox-container">
            <div className="checkbox-container__input">
                <input id="checkbox" type="checkbox" />
                <img src="/components/Checkbox/check-mark.png" />
            </div>
            {LabelOn && <label htmlFor="checkbox">{Label}</label>}
        </div>
    );
}

Checkbox.propTypes = {
    LabelOn: propTypes.bool,
    Label: propTypes.string,
};

export default Checkbox;

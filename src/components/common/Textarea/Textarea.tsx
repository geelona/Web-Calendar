import propTypes from "prop-types";
import "./Textarea.scss";

function Textarea({
    Label,
    Placeholder,
    rows,
    cols,
}: {
    Label: string;
    Placeholder: string;
    rows: number;
    cols: number;
}) {
    return (
        <div className="textarea-container">
            <label>{Label}</label>
            <textarea
                placeholder={Placeholder}
                rows={rows}
                cols={cols}
            ></textarea>
        </div>
    );
}

Textarea.propTypes = {
    Label: propTypes.string.isRequired,
    Placeholder: propTypes.string.isRequired,
    rows: propTypes.number.isRequired,
    cols: propTypes.number.isRequired,
};

export default Textarea;

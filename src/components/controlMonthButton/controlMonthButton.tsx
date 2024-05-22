import "./controlMonthButton.scss";

export default function ControlMonthButton(props: {
    onClick: () => void;
    direction: "left" | "right";
}) {
    return (
        <button className="control-month-button" onClick={props.onClick}>
            <span
                className={
                    props.direction === "left"
                        ? "control-month-button__icon-left"
                        : "control-month-button__icon-right"
                }
            ></span>
        </button>
    );
}

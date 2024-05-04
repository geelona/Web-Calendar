import "./Dropdowns.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import ShowcaseWrapper from "../../components/ShowcaseWrapper/ShowcaseWrapper";

function Dropdowns() {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    return (
        <div className="dropdowns-container">
            <ShowcaseWrapper
                title="Dropdowns"
                children={
                    <>
                        <ul>
                            <Dropdown options={days} selectDefault="Week" />
                        </ul>

                        <ul className="states">
                            <li>Default</li>
                        </ul>
                    </>
                }
            />
        </div>
    );
}

export default Dropdowns;

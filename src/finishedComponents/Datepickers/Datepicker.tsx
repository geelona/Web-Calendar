import "./Datepicker.scss";
import Datepicker from "../../components/common/Datepicker/Datepicker";
import ShowcaseWrapper from "../../components/ShowcaseWrapper/ShowcaseWrapper";

function Datepickers() {
    return (
        <div className="datepickers-container">
            <ShowcaseWrapper
                title="Datepickers"
                children={
                    <>
                        <ul>
                            <li>
                                <Datepicker />
                            </li>
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

export default Datepickers;

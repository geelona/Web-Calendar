import "./Checkboxes.scss";
import Checkbox from "../../components/Checkbox/Checkbox";
import ShowcaseWrapper from "../../components/ShowcaseWrapper/ShowcaseWrapper";

function Checkboxes() {
    return (
        <div className="checkboxes-container">
            <ShowcaseWrapper
                title="Checkboxes"
                children={
                    <>
                        <ul>
                            <li>
                                <Checkbox LabelOn={false} Label="Text" />
                            </li>
                            <li>
                                <Checkbox LabelOn={true} Label="Text" />
                            </li>
                        </ul>
                        <ul className="states">
                            <li>Default label off</li>
                            <li>Default label on</li>
                        </ul>
                    </>
                }
            />
        </div>
    );
}

export default Checkboxes;

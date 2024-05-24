import "./Textareas.scss";
import Textarea from "../../components/common/Textarea/Textarea";
import ShowcaseWrapper from "../../components/ShowcaseWrapper/ShowcaseWrapper";

function Textareas() {
    return (
        <div className="textareas-container">
            <ShowcaseWrapper
                title="Textareas"
                children={
                    <>
                        <ul>
                            <Textarea
                                Label="Description"
                                Placeholder="Lorem ipsum dolor sit..."
                                rows={4}
                                cols={50}
                            />
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

export default Textareas;

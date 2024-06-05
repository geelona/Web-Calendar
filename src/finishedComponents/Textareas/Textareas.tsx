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
                                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                setValue={() => {}}
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

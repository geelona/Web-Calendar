import "./ColorPickers.scss";
import ColorPicker from "../../components/common/ColorPicker/ColorPicker";
import ShowcaseWrapper from "../../components/ShowcaseWrapper/ShowcaseWrapper";

function ColorPickers() {
    return (
        <div className="color-pickers-container">
            <ShowcaseWrapper
                title="Color Pickers"
                children={
                    <>
                        <ul>
                            <li>
                                <ColorPicker />
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

export default ColorPickers;

import "./SelectMenus.scss";
import SelectMenu from "../../components/common/SelectMenu/SelectMenu";
import ShowcaseWrapper from "../../components/ShowcaseWrapper/ShowcaseWrapper";

function SelectMenus() {
    const timeOptions = [
        "12:00 PM",
        "12:30 PM",
        "13:00 PM",
        "13:30 PM",
        "14:00 PM",
        "14:30 PM",
    ];
    return (
        <div className="select-menus-container">
            <ShowcaseWrapper
                title="Select Menus"
                children={
                    <>
                        <ul>
                            <li>
                                <SelectMenu
                                    label="Time"
                                    options={timeOptions}
                                    selectDefault="Select time"
                                />
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

export default SelectMenus;

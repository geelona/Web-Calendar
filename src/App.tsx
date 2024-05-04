import { useRef } from "react";

import "./App.scss";

import Buttons from "./finishedComponents/Buttons/Buttons";
import Links from "./finishedComponents/Links/Links";
import Inputs from "./finishedComponents/Inputs/Inputs";
import Checkboxes from "./finishedComponents/Checkboxes/Checkboxes";
import SelectMenus from "./finishedComponents/SelectMenus/SelectMenus";
import Textareas from "./finishedComponents/Textareas/Textareas";
import Modals from "./finishedComponents/Modals/Modals";
import Datepickers from "./finishedComponents/Datepickers/Datepicker";
import Dropdowns from "./finishedComponents/Dropdowns/Dropdowns";
import ColorPickers from "./finishedComponents/ColorPickers/ColorPickers";
import Toasts from "./finishedComponents/Toasts/Toasts";

function App() {
    const mainContainer = useRef<HTMLDivElement>(null);

    function changeTheme() {
        if (mainContainer.current) {
            mainContainer.current.classList.toggle("main-container--dark");
        }
    }

    return (
        <div ref={mainContainer} className="main-container">
            <div className="theme-container">
                <button onClick={changeTheme}>Change Theme</button>
            </div>
            <div className="components">
                <Buttons />
                <Links />
                <Inputs />
                <Checkboxes />
                <SelectMenus />
                <Textareas />
                <Modals />
                <Datepickers />
                <Dropdowns />
                <ColorPickers />
                <Toasts />
            </div>
        </div>
    );
}

export default App;

import "./SideBar.scss";

import Button from "../Button/Button";
import Datepicker from "../Datepicker/Datepicker";

export default function SideBar() {
    function addMyCalendarsHandler() {
        alert("Add my calendars");
    }

    return (
        <div className="sidebar">
            <Button
                label="Create"
                color="primary"
                withIcon={false}
                disabled={false}
                onClick={() => alert("Create new event")}
                fontSize={0.8}
                customIcon="/components/SideBar/add.png"
                fullWidth={true}
            />
            <Datepicker />
            <div className="calendars">
                <header>
                    <p>My calendars</p>
                    <button onClick={addMyCalendarsHandler}>
                        <img
                            style={{ filter: "invert(1)" }}
                            src="/components/SideBar/add.png"
                        />
                    </button>
                </header>
                <div className="calendars__data"></div>
            </div>
        </div>
    );
}

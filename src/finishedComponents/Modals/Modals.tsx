import "./Modals.scss";
import Modal from "../../components/Modal/Modal";
import ShowcaseWrapper from "../../components/ShowcaseWrapper/ShowcaseWrapper";

function Modals() {
    return (
        <div className="modals-container">
            <ShowcaseWrapper
                title="Modals"
                children={
                    <>
                        <ul>
                            <li>
                                <Modal
                                    title="Title"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                    isOpen={true}
                                    maxWidth="20vw"
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

export default Modals;

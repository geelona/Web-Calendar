import "./Toasts.scss";
import Toast from "../../components/Toast/Toast";
import ShowcaseWrapper from "../../components/ShowcaseWrapper/ShowcaseWrapper";

function Toasts() {
    return (
        <div className="toasts-container">
            <ShowcaseWrapper
                title="Toasts"
                children={
                    <>
                        <ul>
                            <li>
                                <Toast
                                    text="Event deleted"
                                    maxWidth="10vw"
                                    visible={true}
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

export default Toasts;

import "./Buttons.scss";
import Button from "../../components/Button/Button";
import ShowcaseWrapper from "../../components/ShowcaseWrapper/ShowcaseWrapper";

function Buttons() {
    return (
        <div className="buttons-container">
            <ShowcaseWrapper
                title="Buttons"
                children={
                    <>
                        <ul>
                            <li className="header">Primary</li>
                            <li>
                                <Button
                                    label="Button"
                                    color="primary"
                                    withIcon={false}
                                    disabled={false}
                                />
                            </li>
                            <li>
                                <Button
                                    label="Button"
                                    color="primary"
                                    withIcon={false}
                                    disabled={true}
                                />
                            </li>
                        </ul>

                        <ul>
                            <li className="header">Primary with icon</li>
                            <li>
                                <Button
                                    label="Button"
                                    color="primary"
                                    withIcon={true}
                                    disabled={false}
                                />
                            </li>
                            <li>
                                <Button
                                    label="Button"
                                    color="primary"
                                    withIcon={true}
                                    disabled={true}
                                />
                            </li>
                        </ul>

                        <ul>
                            <li className="header">Secondary</li>
                            <li>
                                <Button
                                    label="Button"
                                    color="secondary"
                                    withIcon={false}
                                    disabled={false}
                                />
                            </li>
                            <li>
                                <Button
                                    label="Button"
                                    color="secondary"
                                    withIcon={false}
                                    disabled={true}
                                />
                            </li>
                        </ul>

                        <ul>
                            <li className="header">Secondary with icon</li>
                            <li>
                                <Button
                                    label="Button"
                                    color="secondary"
                                    withIcon={true}
                                    disabled={false}
                                />
                            </li>
                            <li>
                                <Button
                                    label="Button"
                                    color="secondary"
                                    withIcon={true}
                                    disabled={true}
                                />
                            </li>
                        </ul>

                        <ul className="states">
                            <li>Default</li>
                            <li>Disabled</li>
                        </ul>
                    </>
                }
            />
        </div>
    );
}

export default Buttons;

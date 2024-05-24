import "./Inputs.scss";
import Input from "../../components/common/Input/Input";
import ShowcaseWrapper from "../../components/ShowcaseWrapper/ShowcaseWrapper";

function Inputs() {
    return (
        <div className="inputs-container">
            <ShowcaseWrapper
                title="Inputs"
                children={
                    <>
                        <ul>
                            <li>
                                <Input
                                    FieldName="Username*"
                                    FieldType="text"
                                    ErrorMessage="Error message"
                                    Placeholder="Enter your username"
                                    IsErrored={false}
                                    Disabled={false}
                                />
                            </li>
                            <li>
                                <Input
                                    FieldName="Username*"
                                    FieldType="text"
                                    ErrorMessage="Error message"
                                    Placeholder="Enter your username"
                                    IsErrored={false}
                                    Disabled={true}
                                />
                            </li>
                            <li>
                                <Input
                                    FieldName="Username*"
                                    FieldType="text"
                                    ErrorMessage="Error message"
                                    Placeholder="Enter your username"
                                    IsErrored={true}
                                    Disabled={false}
                                />
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <Input
                                    FieldName="Password*"
                                    FieldType="password"
                                    ErrorMessage="Error message"
                                    Placeholder="Enter your password"
                                    IsErrored={false}
                                    Disabled={false}
                                />
                            </li>
                            <li>
                                <Input
                                    FieldName="Password*"
                                    FieldType="password"
                                    ErrorMessage="Error message"
                                    Placeholder="Enter your password"
                                    IsErrored={false}
                                    Disabled={true}
                                />
                            </li>
                            <li>
                                <Input
                                    FieldName="Password*"
                                    FieldType="password"
                                    ErrorMessage="Error message"
                                    Placeholder="Enter your password"
                                    IsErrored={true}
                                    Disabled={false}
                                />
                            </li>
                        </ul>

                        <ul className="states">
                            <li>Default</li>
                            <li>Disabled</li>
                            <li>Error</li>
                        </ul>
                    </>
                }
            />
        </div>
    );
}

export default Inputs;

import "./Links.scss";
import ShowcaseWrapper from "../../components/ShowcaseWrapper/ShowcaseWrapper";
import Link from "../../components/Link/Link";

function Links() {
    return (
        <div className="links-container">
            <ShowcaseWrapper
                title="Links"
                children={
                    <>
                        <ul>
                            <li>
                                <Link label="Link" href="" disabled={false} />
                            </li>
                            <li>
                                <Link label="Link" href="" disabled={true} />
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

export default Links;

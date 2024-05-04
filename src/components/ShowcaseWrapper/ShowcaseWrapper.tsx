import propTypes from "prop-types";
import "./ShowcaseWrapper.scss";

function ShowcaseWrapper({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="showcase-wrapper">
            <header>
                <h1>{title}</h1>
            </header>
            {children}
        </div>
    );
}

ShowcaseWrapper.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
};

export default ShowcaseWrapper;

import ShowcaseWrapper from "./ShowcaseWrapper";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders properly", () => {
    render(
        <ShowcaseWrapper title="Showcase Title" children={<div>Content</div>} />
    );
    const showcase = document.querySelector(".showcase-wrapper");
    expect(showcase).toBeInTheDocument();
});

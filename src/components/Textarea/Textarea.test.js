import Textarea from "./Textarea";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders properly", () => {
    render(
        <Textarea
            Label="Label"
            Placeholder="Default Textarea"
            rows={5}
            cols={50}
        />
    );
    const textarea = document.querySelector("textarea");
    expect(textarea).toBeInTheDocument();
});

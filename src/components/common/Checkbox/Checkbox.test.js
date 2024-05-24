import CheckBox from "./Checkbox";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders checkbox", () => {
    render(<CheckBox Label="Checkbox" LabelOn={false} />);
    const checkbox = document.querySelector("input");
    expect(checkbox).toBeInTheDocument();
});

test("renders with label", () => {
    render(<CheckBox Label="Checkbox" LabelOn={true} />);
    const label = document.querySelector("label");
    expect(label).toBeInTheDocument();
});

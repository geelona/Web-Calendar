import Button from "./Button";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders properly", () => {
    render(
        <Button
            label="Button"
            color="primary"
            withIcon={false}
            disabled={false}
        />
    );
    const button = document.querySelector("button");
    expect(button).toBeInTheDocument();
});

test("renders with icon", () => {
    render(
        <Button
            label="Button"
            color="primary"
            withIcon={true}
            disabled={false}
        />
    );
    const icon = document.querySelector("img");
    expect(icon).toBeInTheDocument();
});

test("renders disabled", () => {
    render(
        <Button
            label="Button"
            color="primary"
            withIcon={false}
            disabled={true}
        />
    );
    const button = document.querySelector("button");
    expect(button).toBeDisabled();
});

import Dropdown from "./Dropdown";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders properly", () => {
    render(
        <Dropdown
            options={["Option 1", "Option 2", "Option 3"]}
            selectDefault="Option 1"
        />
    );
    const dropdown = document.querySelector(".dropdown-menu-container");
    expect(dropdown).toBeInTheDocument();
});

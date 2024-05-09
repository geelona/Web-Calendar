import SelectMenu from "./SelectMenu";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders properly", () => {
    render(
        <SelectMenu
            label="Select Menu"
            options={[
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4",
                "Option 5",
            ]}
            selectDefault="Option 1"
        />
    );
    const selectMenu = document.querySelector(".select-menu-container");
    expect(selectMenu).toBeInTheDocument();
});

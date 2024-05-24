import ColorPicker from "./ColorPicker";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders properly", () => {
    render(<ColorPicker />);
    const colorPicker = document.querySelector(".color-picker-container");
    expect(colorPicker).toBeInTheDocument();
});

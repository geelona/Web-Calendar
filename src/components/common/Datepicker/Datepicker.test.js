import Datepicker from "./Datepicker";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders properly", () => {
    render(<Datepicker />);
    const datepicker = document.querySelector(".datepicker-container");
    expect(datepicker).toBeInTheDocument();
});

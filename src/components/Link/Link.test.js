import Link from "./Link";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders properly", () => {
    render(<Link label="Link" href="" disabled={false} />);
    const link = document.querySelector("a");
    expect(link).toBeInTheDocument();
});

test("renders disabled", () => {
    render(<Link label="Link" href="" disabled={true} />);
    const link = document.querySelector("a");
    expect(link).toBeInTheDocument();
});

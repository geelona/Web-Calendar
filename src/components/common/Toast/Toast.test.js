import Toast from "./Toast";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders properly", () => {
    render(
        <Toast text="This is a toast message" maxWidth="15vw" visible={true} />
    );
    const toast = document.querySelector(".toast-container");
    expect(toast).toBeInTheDocument();
});

test("renders hidden", () => {
    render(
        <Toast text="This is a toast message" maxWidth="15vw" visible={false} />
    );
    const toast = document.querySelector(".toast-container");
    expect(toast).toBeInTheDocument();
});

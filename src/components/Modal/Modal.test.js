import Modal from "./Modal";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders properly", () => {
    render(
        <Modal
            title="Modal Title"
            text="This is the modal content."
            isOpen={true}
            maxWidth="15vw"
        />
    );
    const modal = document.querySelector(".modal-container");
    expect(modal).toBeInTheDocument();
});

test("renders closed", () => {
    render(
        <Modal
            title="Modal Title"
            text="This is the modal content."
            isOpen={false}
            maxWidth="15vw"
        />
    );
    const modal = document.querySelector(".modal-container");
    expect(modal).toBeInTheDocument();
});

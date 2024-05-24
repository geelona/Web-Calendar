import Input from "./Input";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders properly", () => {
    render(
        <Input
            FieldName="Label*"
            FieldType="text"
            ErrorMessage="Error Message"
            Placeholder="Default Input"
            IsErrored={false}
            Disabled={false}
        />
    );
    const input = document.querySelector(".default-input");
    expect(input).toBeInTheDocument();
});

test("renders properly with error", () => {
    render(
        <Input
            FieldName="Label*"
            FieldType="text"
            ErrorMessage="Error Message"
            Placeholder="Default Input"
            IsErrored={true}
            Disabled={false}
        />
    );
    const input = document.querySelector(".default-input");
    expect(input).toBeInTheDocument();
});

test("renders properly with disabled", () => {
    render(
        <Input
            FieldName="Label*"
            FieldType="text"
            ErrorMessage="Error Message"
            Placeholder="Default Input"
            IsErrored={false}
            Disabled={true}
        />
    );
    const input = document.querySelector(".default-input");
    expect(input).toBeInTheDocument();
});

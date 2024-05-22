export function ValidateRepeatPassword(
    repeatPassword: string,
    password: string,
    setRepeatPasswordError: any,
    setRepeatPasswordErrorMessage: any
) {
    if (!repeatPassword) {
        setRepeatPasswordError(true);
        setRepeatPasswordErrorMessage("Repeat password is required");
        return false;
    } else if (repeatPassword !== password) {
        setRepeatPasswordError(true);
        setRepeatPasswordErrorMessage("Passwords do not match");
        return false;
    } else {
        setRepeatPasswordError(false);
        setRepeatPasswordErrorMessage("");
        return true;
    }
}

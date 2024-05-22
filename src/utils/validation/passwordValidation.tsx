export function ValidatePassword(
    password: string,
    setPasswordError: any,
    setPasswordErrorMessage: any
) {
    if (!password) {
        setPasswordError(true);
        setPasswordErrorMessage("Password is required");
        return false;
    } else {
        setPasswordError(false);
        setPasswordErrorMessage("");
        return true;
    }
}

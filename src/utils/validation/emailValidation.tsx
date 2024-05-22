export function ValidateEmail(
    email: string,
    setEmailError: any,
    setEmailErrorMessage: any
) {
    if (!email) {
        setEmailError(true);
        setEmailErrorMessage("Email is required");
        return false;
    } else if (
        !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ) {
        setEmailError(true);
        setEmailErrorMessage("Email is not valid");
        return false;
    } else {
        setEmailError(false);
        setEmailErrorMessage("");
        return true;
    }
}

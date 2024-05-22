export async function logOutHandler(logout: () => void) {
    try {
        await logout();
    } catch (error: any) {
        alert(error.message);
    }
}

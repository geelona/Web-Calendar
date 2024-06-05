export function convertTo24Hour(time: string) {
    let [timePart, period] = time.split(" ");
    let [hours, minutes] = timePart.split(":").map(Number);

    if (period.toUpperCase() === "PM" && hours !== 12) {
        hours += 12;
    } else if (period.toUpperCase() === "AM" && hours === 12) {
        hours = 0;
    }

    return { hours, minutes };
}

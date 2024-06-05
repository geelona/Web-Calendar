export function getTimeDifferenceInMinutes(
    startTime: { hours: number; minutes: number },
    endTime: { hours: number; minutes: number }
): number {
    const startTotalMinutes = startTime.hours * 60 + startTime.minutes;
    const endTotalMinutes = endTime.hours * 60 + endTime.minutes;
    return endTotalMinutes - startTotalMinutes;
}

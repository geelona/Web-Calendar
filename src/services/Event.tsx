import { getDatabase, ref, set, get, push, remove } from "firebase/database";

const db = getDatabase();

//write
export async function addEvent({
    userId,
    title,
    date,
    startTime,
    endTime,
    isAllDay,
    repeat,
    calendar,
    description,
}: {
    userId: string;
    title: string;
    date: number[];
    startTime: string;
    endTime: string;
    isAllDay: boolean;
    repeat: string;
    calendar: string;
    description: string;
}) {
    const eventRef = push(
        ref(db, `users/${userId}/calendars/${calendar}/events`)
    );
    try {
        await set(eventRef, {
            title,
            date,
            startTime,
            endTime,
            isAllDay,
            repeat,
            calendar,
            description,
        });
    } catch (error) {
        console.error("Error adding event:", error);
    }
}

//read

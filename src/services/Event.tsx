import { getDatabase, ref, set, push, remove } from "firebase/database";

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
            id: eventRef.key,
        });
    } catch (error) {
        console.error("Error adding event:", error);
    }
}

//delete
export async function deleteEvent({
    userId,
    calendar,
    eventId,
}: {
    userId: string;
    calendar: string;
    eventId: string;
}) {
    const eventRef = ref(
        db,
        `users/${userId}/calendars/${calendar}/events/${eventId}`
    );
    try {
        await remove(eventRef);
    } catch (error) {
        console.error("Error deleting event:", error);
    }
}

//edit
export async function editEvent({
    userId,
    calendar,
    eventId,
    title,
    date,
    startTime,
    endTime,
    isAllDay,
    repeat,
    description,
    prevCalendar,
}: {
    userId: string;
    calendar: string;
    eventId: string;
    title: string;
    date: number[];
    startTime: string;
    endTime: string;
    isAllDay: boolean;
    repeat: string;
    description: string;
    prevCalendar: string;
}) {
    const eventRef = ref(
        db,
        `users/${userId}/calendars/${calendar}/events/${eventId}`
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
            id: eventId,
        });
        if (prevCalendar !== calendar) {
            deleteEvent({ userId, calendar: prevCalendar, eventId });
        }
    } catch (error) {
        console.error("Error editing event:", error);
    }
}

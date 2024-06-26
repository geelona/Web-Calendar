import { getDatabase, ref, set, get, push, remove } from "firebase/database";

const db = getDatabase();

//write
export async function addCalendar(
    userId: string,
    title: string,
    color: string,
    id?: string
) {
    let calendarRef;
    if (id === "default") {
        calendarRef = ref(db, `users/${userId}/calendars/default`);
    } else {
        calendarRef = push(ref(db, `users/${userId}/calendars`));
    }
    try {
        const calendarID = id ? id : calendarRef.key;
        await set(calendarRef, {
            title,
            color,
            id: calendarID,
        });
    } catch (error) {
        console.error("Error adding calendar:", error);
    }
}

//read
export async function getCalendars(userId: string) {
    const calendarsRef = ref(db, `users/${userId}/calendars`);
    try {
        let snapshot = await get(calendarsRef);
        if (!snapshot.exists()) {
            addCalendar(userId, "Default", "#00FFFF", "default");
            snapshot = await get(calendarsRef);
        }
        return snapshot.val();
    } catch (error) {
        console.error("Error getting calendars:", error);
    }
}

//delete
export async function deleteCalendar(userId: string, calendarId: string) {
    const calendarRef = ref(db, `users/${userId}/calendars/${calendarId}`);
    try {
        await remove(calendarRef);
    } catch (error) {
        console.error("Error deleting calendar:", error);
    }
}

//edit
export async function editCalendar(
    userId: string,
    calendarID: string,
    title: string,
    color: string
) {
    let calendarRef = ref(db, `users/${userId}/calendars/${calendarID}`);
    try {
        await set(calendarRef, {
            title,
            color,
            id: calendarID,
        });
    } catch (error) {
        console.error("Error editing calendar:", error);
    }
}

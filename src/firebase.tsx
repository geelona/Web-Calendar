import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyBF95ifYrCP8MrHpOjCHJeHNzj0wLrHjNk",
    authDomain: "webcalendar-4c36d.firebaseapp.com",
    databaseURL:
        "https://webcalendar-4c36d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "webcalendar-4c36d",
    storageBucket: "webcalendar-4c36d.appspot.com",
    messagingSenderId: "831710854368",
    appId: "1:831710854368:web:aad4f59e07599a3a82a485",
    measurementId: "G-QXS200JMJN",
});

export const auth = getAuth(app);
export default app;


import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAAYXrvJHDSHU8Tzbz8nry79NXIsF4V6ao",
        authDomain: "todo-app-ed2fa.firebaseapp.com",
        databaseURL: "https://todo-app-ed2fa.firebaseio.com",
        projectId: "todo-app-ed2fa",
        storageBucket: "todo-app-ed2fa.appspot.com",
        messagingSenderId: "44611613815",
        appId: "1:44611613815:web:3565385d6cf7ae313b8272",
        measurementId: "G-C1S3MGD7TK"
});

const db = firebaseApp.firestore();

export default db;
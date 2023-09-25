import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIGwc2t7_9-6OkqYSgcOMwLpIaosWDiJ8",
    authDomain: "fir-crud-d8947.firebaseapp.com",
    projectId: "fir-crud-d8947",
    storageBucket: "fir-crud-d8947.appspot.com",
    messagingSenderId: "1085179345010",
    appId: "1:1085179345010:web:c08e2734b8b370311f2aeb",
    measurementId: "G-TJ2TKN8E28"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
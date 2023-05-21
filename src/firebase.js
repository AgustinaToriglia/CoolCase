// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSPF3NEuScM5_V91ccShaUQrBVbzkTtXY",
    authDomain: "coolcase-fdbc6.firebaseapp.com",
    projectId: "coolcase-fdbc6",
    storageBucket: "coolcase-fdbc6.appspot.com",
    messagingSenderId: "461303490097",
    appId: "1:461303490097:web:661fbdab129d5b7596d710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
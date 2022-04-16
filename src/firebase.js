// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIr7U6Vz-beubq6uw1ZLB-x8bxX7ABAao",
    authDomain: "clooneysperoni.firebaseapp.com",
    projectId: "clooneysperoni",
    storageBucket: "clooneysperoni.appspot.com",
    messagingSenderId: "141831167628",
    appId: "1:141831167628:web:45e0100affd2603c2125a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const dataBase = getFirestore(app);

export default dataBase;
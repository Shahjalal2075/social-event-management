// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoJv1V8AU9_hhdM8mqORLuaMzpsgt80mU",
  authDomain: "social-event-management-dd089.firebaseapp.com",
  projectId: "social-event-management-dd089",
  storageBucket: "social-event-management-dd089.appspot.com",
  messagingSenderId: "851056010331",
  appId: "1:851056010331:web:d0f85b8fd2e28f7d9e8b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
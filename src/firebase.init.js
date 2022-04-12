// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXBS84rlPT22xRESOZFYFbLmUqhi_wbw0",
  authDomain: "hotal-offer-yebenling.firebaseapp.com",
  projectId: "hotal-offer-yebenling",
  storageBucket: "hotal-offer-yebenling.appspot.com",
  messagingSenderId: "657278023292",
  appId: "1:657278023292:web:9786f407e963bf0bf77bf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
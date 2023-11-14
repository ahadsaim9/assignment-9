// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkZ_eyg_BpnMp9cYIrsCq2Q5Sk_favNuc",
  authDomain: "assignment--9-99532.firebaseapp.com",
  projectId: "assignment--9-99532",
  storageBucket: "assignment--9-99532.appspot.com",
  messagingSenderId: "602702825686",
  appId: "1:602702825686:web:3dc72a34454bd75587a177",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth; 

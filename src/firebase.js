import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const app=firebase.initializeApp( {
  apiKey: "AIzaSyBhkHvVk7gLFjvbmyEOH5XWSxiTR7S5Oew",
  authDomain: "crypto-72148.firebaseapp.com",
  projectId: "crypto-72148",
  storageBucket: "crypto-72148.appspot.com",
  messagingSenderId: "143978480650",
  appId: "1:143978480650:web:851c1be4f6694ec3580bf3"
})
export const auth=app.auth()
export default app

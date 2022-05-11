import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp07jwauecmtzKuse_VJ3BWF93cNFRPw4",
  authDomain: "house-marketplace-app-fc106.firebaseapp.com",
  projectId: "house-marketplace-app-fc106",
  storageBucket: "house-marketplace-app-fc106.appspot.com",
  messagingSenderId: "708319707262",
  appId: "1:708319707262:web:030c93c52c208b5824982f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

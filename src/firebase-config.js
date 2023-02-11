import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC-jtxSL1_e9u_4Y16um-V3mIpbplHwsJo",
  authDomain: "fir-auth-678a0.firebaseapp.com",
  projectId: "fir-auth-678a0",
  storageBucket: "fir-auth-678a0.appspot.com",
  messagingSenderId: "369885844776",
  appId: "1:369885844776:web:ab0179c4cf771cb400ac1d",
  measurementId: "G-55VYVDJ00Z",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)

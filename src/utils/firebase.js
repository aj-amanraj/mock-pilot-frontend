
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mockpilot-a25e6.firebaseapp.com",
  projectId: "mockpilot-a25e6",
  storageBucket: "mockpilot-a25e6.firebasestorage.app",
  messagingSenderId: "1057902711329",
  appId: "1:1057902711329:web:6cbb0b85d07e8791498960"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth, provider}
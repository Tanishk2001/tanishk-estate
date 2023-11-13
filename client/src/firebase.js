import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tanishk-estate.firebaseapp.com",
  projectId: "tanishk-estate",
  storageBucket: "tanishk-estate.appspot.com",
  messagingSenderId: "814925920946",
  appId: "1:814925920946:web:941f8f42254b43d66327ab"
};

export const app = initializeApp(firebaseConfig);
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBQsa1go-BH1Je9nLMAnvh66xwX6IFLKfo",
    authDomain: "shoes-shop-40b9a.firebaseapp.com",
    projectId: "shoes-shop-40b9a",
    storageBucket: "shoes-shop-40b9a.appspot.com",
    messagingSenderId: "1085688926786",
    appId: "1:1085688926786:web:694c9aac26699cfccb13db",
    measurementId: "G-8MCDW6LSR5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
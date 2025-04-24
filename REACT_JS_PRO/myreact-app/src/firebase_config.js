// npm i firebase 

// npm install -g firebase-tools

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPtKbFGDo6MEj_0ic0E0G1xoJgUgQfT6w",
  authDomain: "febreact-166b6.firebaseapp.com",
  projectId: "febreact-166b6",
  storageBucket: "febreact-166b6.firebasestorage.app",
  messagingSenderId: "42977573736",
  appId: "1:42977573736:web:d9875395e3779713aaf4dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage};

import {getApp, getApps, initializeApp } from "firebase/app";
import {g} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCcRxz_zb98BEFcrM0N2SHjOUpbAZQQAm0",
  authDomain: "food-training-4893f.firebaseapp.com",
  databaseURL: "https://food-training-4893f-default-rtdb.firebaseio.com",
  projectId: "food-training-4893f",
  storageBucket: "food-training-4893f.appspot.com",
  messagingSenderId: "895592056562",
  appId: "1:895592056562:web:19e3952b09148259f0b26b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
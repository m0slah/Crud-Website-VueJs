import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiYW1MOmYrV7k-5I04rLegafETCyNiX-Q",
  authDomain: "crud-website-vuejs.firebaseapp.com",
  projectId: "crud-website-vuejs",
  storageBucket: "crud-website-vuejs.appspot.com",
  messagingSenderId: "129864285764",
  appId: "1:129864285764:web:7d54c05b916e3ce996c611",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

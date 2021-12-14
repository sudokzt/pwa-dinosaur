import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCjKIltEErDOMXS0KbeUyGrTg_enplB5-U",
  authDomain: "pwa-dinosaur.firebaseapp.com",
  projectId: "pwa-dinosaur",
  storageBucket: "pwa-dinosaur.appspot.com",
  messagingSenderId: "447731979340",
  appId: "1:447731979340:web:113b2125ebc722e86450e9",
  measurementId: "G-M2DX3LWTK7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

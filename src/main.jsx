import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter } from 'react-router-dom';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDL-0xxTJoQQH75A_YxgdMsexk63EqYNw",
  authDomain: "film-review-7fc13.firebaseapp.com",
  projectId: "film-review-7fc13",
  storageBucket: "film-review-7fc13.appspot.com",
  messagingSenderId: "245990478944",
  appId: "1:245990478944:web:979adf1508be9da6685f05",
  measurementId: "G-2JV2XRY5KJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("analitik değişkeni",analytics);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

    <BrowserRouter>
    <App/>
    </BrowserRouter>
  // </React.StrictMode>,
)

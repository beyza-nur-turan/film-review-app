import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBDL-0xxTJoQQH75A_YxgdMsexk63EqYNw",
    authDomain: "film-review-7fc13.firebaseapp.com",
    projectId: "film-review-7fc13",
    storageBucket: "film-review-7fc13.appspot.com",
    messagingSenderId: "245990478944",
    appId: "1:245990478944:web:979adf1508be9da6685f05",
    measurementId: "G-2JV2XRY5KJ"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app)
  console.log("analitik değişkeni",analytics);

  export const register= async(email,password)=>{
  
    const {user}=await createUserWithEmailAndPassword(auth,email,password);
   return user;
  
   
  // await updateCurrentUser(auth,{displayName:name_surname});
  // await updateCurrentUser(auth,{displayName:username})
  };
  export const login = async (email, password) => {
   
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;};

  
  export default app
 
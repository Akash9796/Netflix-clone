import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";


const firebaseConfig = {
  apiKey: "AIzaSyCg2MTHrR4XaI5hPzA9lJAr_VgKc4GGc4Y",
  authDomain: "netflix-1d698.firebaseapp.com",
  projectId: "netflix-1d698",
  storageBucket: "netflix-1d698.appspot.com",
  messagingSenderId: "817573948731",
  appId: "1:817573948731:web:74d633cb5b022a2da05b1e",
  measurementId: "G-08J43CMWDK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  
  // const dispatch = useDispatch();
  try {
    await signInWithPopup(auth, provider).then((results) => {
      console.log(results);
      const userDetails = {
        name: results.user.displayName,
        email: results.user.email,
        photo: results.user.photoURL,
      };

      localStorage.setItem("user", JSON.stringify(userDetails));
    });
  } catch (error) {}
};

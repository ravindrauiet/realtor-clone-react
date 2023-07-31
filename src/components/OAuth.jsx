import React from 'react'

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { doc, getDoc ,serverTimestamp,setDoc } from 'firebase/firestore';
import { db } from '../firebase';

import {FcGoogle} from "react-icons/fc"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {

  //navigation to home page
  const navigate = useNavigate();

  async function onGoogleClick() { //on click function to check auth
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider(); //use new word 

      // sign in using google authentication
      const result = await signInWithPopup(auth, provider);  //To sign in with a pop-up window, call signInWithPopup
      const user = result.user;

      //check for the user already
      const docRef = doc(db,"users",user.uid) //db come from firebase.js

      //check all the document of user id
      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()){ // if user not exists
        await setDoc(docRef, 
          {name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/"); // navigate to home page
    } catch (error) {
      toast.error("could not authorize with Google") 
    }
  }
  
  return (
    <button type="button" onClick={onGoogleClick} // on click to continue with google
        className=" flex items-center justify-center w-full bg-red-700 text-white 
        px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-200 ease-in-out rounded">
        <FcGoogle className="text-2xl bg-white rounded-full mr-3" />
        Continue with Google 
    </button>
  )
}

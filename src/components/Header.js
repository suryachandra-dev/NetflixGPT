import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser } from "../Utils/userSlice";
import  {  useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../Utils/constants";
const Header = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const reduxStoreUser = useSelector((store) => store.user);
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return ()=>{
      return unsubscribe();;
    }
  },[]);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute  px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-52"
        src={LOGO}
        alt="Netflix Logo"
      />
      {reduxStoreUser && <div className="flex">
        <div className="w-12 h-12  my-auto">
          <img
            // src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp' alt='smile profile picture'
            src={reduxStoreUser?.photoURL} alt='User Icon'
          />
        </div>

        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>}
      
    </div>
  );
};

export default Header;

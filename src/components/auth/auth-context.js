import {initializeApp} from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  cartItems: [],
  setCartItems: () => {},
});

const firebaseConfig = {
  apiKey: "AIzaSyCggpjfrSteMxZNSdp8KyyqQFPSQjVe8Xo",
  authDomain: "auth-618c1.firebaseapp.com",
  databaseURL: "https://auth-618c1-default-rtdb.firebaseio.com",
  projectId: "auth-618c1",
  storageBucket: "auth-618c1.appspot.com",
  messagingSenderId: "575311165038",
  appId: "1:575311165038:web:d4a41480c927811b0d587f",
  measurementId: "G-F67PELT3FH"
};

const firebaseapp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseapp);

export const AuthContextProvider = (props) => { 
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;
  const [cartItems, setCartItems] = useState([]);

  useEffect (() => {
        onValue(ref(database, 'email/' + email),
      (snapshot) => {
      const data = snapshot.val();
     
      setCartItems(data?.cartItems || []);
    });
  }, [email]);

  const writeUserData = (cartItems) => {
    if (email === null) {
      setCartItems(cartItems)
    } else (
       set(ref(database, 'email/' + email), {
       cartItems: cartItems,
    }));
  };
  
  const loginHandler = (token, newEmail) => {
    setToken(token);
    const updateemail = newEmail.replaceAll(/[^a-zA-Z ]/g,'');
    setEmail(updateemail);
  };

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    cartItems: cartItems,
    setCartItems: writeUserData,    
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
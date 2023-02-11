import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import "./App.css";

function App() {
  const [regiterEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  },[]);

  //Register Account
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        regiterEmail,
        registerPassword
      );
      console.log(user);
      
    } catch (error) {
      //console.log(error.message);
      alert(" This Email is Already Registred")
    }
  };

  //Login Account
  const login = async () => {
    try{
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
        );
        console.log(user);
      }catch (error)
      {
        alert("Wrong Credentials")
      }
  };

  //Logout Account
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button onClick={register}> Create User </button>
      </div>{" "}
      <br /> <br />
      <div>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div>{" "}
      <br /> <br />
      <div>
        <h4>User Logged in:</h4>
        {user?user.email:"No Account"}
        <button onClick={logout}>Log Out</button>
      </div>
    </div>
  );
}

export default App;

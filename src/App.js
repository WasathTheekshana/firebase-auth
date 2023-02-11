import "./App.css";

function App() {

  //Register Account
  const register = async () => {

  }

  //Login Account
  const login = async () => {

  }

  //Logout Account
  const logout = async () => {

  }


  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button> Create User </button>
      </div> <br /> <br />

      <div>
        <h3>Login</h3>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button> Login </button>
      </div> <br /> <br />

      <div>
        <h4>User Logged in:</h4>
        <button>Log Out</button>
      </div>

    </div>
  );
}

export default App;

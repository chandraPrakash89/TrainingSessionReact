import { useRef } from 'react';
import './App.css';
import styles from './my-style.module.css' 

/**
 * 
 * Use of useRef hooks
 * Use of Inline styling
 * Use of CSS stylesheets
 * Use of CSS Modules
 * 
 */

function App() {

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const btnStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "15px 20px",
    textAlign: "center",
    fontSize: "16px",
    margin: "4px 2px",
    borderRadius: "4px",
    display: "inline-block",
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(`Username: ${username}, Password: ${password}`);
  };


  return (
    <div class="login-container">
      <h1 style={{ color: "green", backgroundColor:"yellow", justifyContent:"center", display:"flex" }}>Login</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" ref={passwordRef} />
        </div>
        <button type="submit" style={btnStyle}>Submit</button>
      </form>
    </div>
  )

}

export default App;

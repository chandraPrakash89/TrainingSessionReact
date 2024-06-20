import { useRef } from 'react';
import './App.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(`Username: ${username}, Password: ${password}`);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" ref={passwordRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )

}

export default App;

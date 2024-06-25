import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import axios from 'axios';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    try {
      // Dummy API
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        username,
        password,
      });

      console.log('Response:', response.data);
      setUsername('');
      setPassword('');
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('Please try again.'); 
    }
  };


  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              margin="normal"
              fullWidth
              id="outlined-basic"
              label="Username"
              value={username}
              variant="outlined"
              // inputRef={usernameRef} 
              onChange={(e) => setUsername(e.target.value)}
              />
          </div>
          <div>
            <TextField
              margin="normal"
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              // inputRef={passwordRef} 
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>Submit</Button>
        </form>
      </div>
    </Container>

  )

}

export default App;

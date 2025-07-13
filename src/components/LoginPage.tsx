import React, { useState } from 'react';
import { useLogin, Notification, useNotify } from 'react-admin';
import { Card, CardContent, TextField, Button } from '@mui/material';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ username, password }).catch(() =>
      notify('Invalid username or password', { type: 'warning' })
    );
  };

  return (
    <Card style={{ maxWidth: 400, margin: '100px auto', padding: 20 }}>
      <CardContent>
        <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Chop Tok Admin</h2>
        <div style={{ 
          background: '#e3f2fd', 
          padding: 10, 
          borderRadius: 4, 
          marginBottom: 20,
          fontSize: '0.9em'
        }}>
          <strong>Demo Credentials:</strong><br/>
          Username: admin<br/>
          Password: admin123
        </div>
        <form onSubmit={submit}>
          <div>
            <TextField
              label="Username"
              fullWidth
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginTop: 16 }}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 24 }}
          >
            Sign In
          </Button>
        </form>
        <Notification />
      </CardContent>
    </Card>
  );
};

export default LoginPage;

// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import {
  Grid,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import fastFoodBg from '../assets/FAST FOOD.jpg'; // Using actual filename

const LoginPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const login = useLogin();
  const notify = useNotify();

  const toggleMode = () => setIsSignUp(prev => !prev);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    login({ username, password }).catch(() =>
      notify('Invalid username or password', { type: 'warning' })
    );
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      notify('Passwords do not match', { type: 'warning' });
      return;
    }
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, ownerName, username, password }),
      });
      if (!res.ok) throw new Error(await res.text());
      notify('Account created! Please sign in.', { type: 'info' });
      setIsSignUp(false);
    } catch (err: any) {
      notify(err.message || 'Signup failed', { type: 'error' });
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${fastFoodBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid container sx={{ height: '100%' }}>
        {/* empty left side shows the background image */}
        <Grid size={{ xs: 0, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }} />

        {/* right side: the form */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
            }}
          >
            <Paper
              elevation={8}
              sx={{
                p: 4,
                maxWidth: 400,
                width: '100%',
                bgcolor: 'rgba(255,255,255,0.85)',
              }}
            >
              <Typography variant="h5" align="center" gutterBottom>
                {isSignUp
                  ? 'Create Your Restaurant Account'
                  : 'Restaurant Sign In'}
              </Typography>

              <Box
                component="form"
                onSubmit={isSignUp ? handleSignUp : handleSignIn}
                noValidate
              >
                {isSignUp && (
                  <>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Business Name"
                      value={businessName}
                      onChange={e => setBusinessName(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Owner Name"
                      value={ownerName}
                      onChange={e => setOwnerName(e.target.value)}
                    />
                  </>
                )}

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Email or Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  autoComplete="username"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete={isSignUp ? 'new-password' : 'current-password'}
                />

                {isSignUp && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {isSignUp ? 'Sign Up' : 'Sign In'}
                </Button>

                <Button
                  fullWidth
                  onClick={toggleMode}
                  sx={{ textTransform: 'none' }}
                >
                  {isSignUp
                    ? 'Already have an account? Sign In'
                    : "Don't have an account? Sign Up"}
                </Button>
              </Box>
            </Paper>
          </Box>

          <Notification />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;

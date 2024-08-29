import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { Box, Container, CssBaseline, TextField } from '@mui/material';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  mobile: yup
    .string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
});

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', padding: '20px' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register('username')}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </div>
            <div>
              <TextField
                id="mobile"
                label="Mobile No."
                variant="outlined"
                fullWidth
                margin="normal"
                {...register('mobile')}
                error={!!errors.mobile}
                helperText={errors.mobile?.message}
              />
            </div>
            <div>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>
            <Button variant="contained" type="submit" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
}

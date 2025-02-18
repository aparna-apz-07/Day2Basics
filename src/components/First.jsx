import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
const First = () => {
  return (
    <div>
      {/* <h1>Welcome to React JS</h1>
      <input type="text" placeholder='Username' /><br />
      <input type="text" placeholder='Password' /><br />
      <button>Login</button>
      <br /><br /><br /> */}
      <Typography variant="h1" gutterBottom>
        welcome
      </Typography><br />
      <TextField variant="standard" label="username"/><br /><br />
      <TextField variant="filled" label="password" type="password"/><br /><br />
      <TextField variant="outlined" label="Captcha" /><br /><br />
      <Button variant="text" color="error">Login</Button><br /><br />
      <Button variant="contained" color="info">Signup</Button><br /><br />
      <Button variant="outlined">Forgot</Button><br /><br />
    </div>
  )
}

export default First

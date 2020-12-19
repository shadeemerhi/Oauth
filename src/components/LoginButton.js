import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function LoginButton() {
  return (
    <Link to="/login">
      <Button variant="contained" color="primary">Login</Button>
    </Link>
  )
}


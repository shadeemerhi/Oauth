import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    background: '#D3D3D3',
  },

  text: {
    color: 'black'
  }
}))

export default function Nav() {

  const classes = useStyles();
  const [user, setUser] = useState(false);

  return (
    <div className={classes.root}>
      <Link to="/">
        <Typography className={classes.text}>Application</Typography>
      </Link>
      <LoginButton/>
      {user && <LogoutButton/>}
    </div>
  )
}


import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '50px',
    width: '200px',
    padding: '5px',
    borderRadius: '10px',
    background: 'white',
    color: 'black',
    '&:visited': {
      color: 'black'
    },
    '&:hover': {
      textDecoration: 'none',
      cursor: 'pointer',
    } 
  }

}))

export default function GitHubLogin() {

  const classes = useStyles();

  const loginUser = () => {
    axios.get('/login/github').then(res => {
      console.log(res);
    })
  }

  return (
    // <Link href="http://localhost:8080/login/github" className={classes.root}>
    //   <GitHubIcon />
    //   <Typography>Login with GitHub</Typography>
    // </Link>
    <div className={classes.root} onClick={() => loginUser()}>
      <GitHubIcon />
      <Typography>Login with GitHub</Typography>
    </div>
  )
}


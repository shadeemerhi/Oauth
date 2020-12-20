import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

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

  return (
    <Link href="/login" className={classes.root}>
      <GitHubIcon />
      <Typography>Login with GitHub</Typography>
    </Link>
  )
}


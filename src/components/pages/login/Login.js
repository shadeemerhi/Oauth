import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    border: '2px solid red',
  }

}))

export default function Login() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form/>
    </div>
  )
}


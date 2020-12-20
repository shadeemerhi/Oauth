import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubLogin from './GitHubLogin';

const useStyles = makeStyles((theme) => ({
  root: {
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '1rem',
    height: '200px',
    width: '300px',
    background: 'lightgrey',
    borderRadius: '10px'
  }

}))

export default function Form() {

  const classes = useStyles();

  return (
    <div className={classes.form}>
      <GitHubLogin/>
    </div>
  )
}


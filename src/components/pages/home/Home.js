import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
  }

}))

export default function Home() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>The Home Page</Typography>
    </div>
  )
}


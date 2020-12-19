import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../src/components/Nav';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }

}))

export default function App() {

  const classes = useStyles();

  useEffect(() => {
    axios.get('/api/data').then(response => {
      console.log(response.data);
    })
  },[])


  return (
    <Router>
      <div className={classes.root}>
        <Nav></Nav>

        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}


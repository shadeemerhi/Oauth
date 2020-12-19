import { useEffect } from 'react';
const axios = require('axios');

export default function App() {
  
  useEffect(() => {
    axios.get('/api/data').then(response => {
      console.log(response.data);
    })
  },[])


  return (
    <h1>
      This is the app
    </h1>
  );
}


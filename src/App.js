import React, { useState, useEffect } from 'react';
import Pages from './pages';

function App() {
  //declares a new state variable called user
  const [user, setUser] = useState(null);
  //this is basically componentDidMount, componenetDidUpdate, and componentWillUnmount combined
  useEffect(() => {
    //get my github repos
    fetch('https://gitconnected.com/v1/portfolio/reiting')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;
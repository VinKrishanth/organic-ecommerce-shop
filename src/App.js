import React from 'react'
import Layouts from "./Layouts/Layouts";
import Login from './Pages/Auth/Login';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className={``}>
      {!isLoggedIn && <Login /> }
      {isLoggedIn &&  <Layouts /> }
    </div>

  );
}

export default App;

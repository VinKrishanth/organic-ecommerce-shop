import React from 'react'
import Layouts from "./Layouts/Layouts";
import Login from './Pages/Auth/Login';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const itemsList = useSelector(state => state.cart.itemsList);
  console.log(itemsList);

  return (
    <>
      {!isLoggedIn && <Login /> }
      {isLoggedIn &&  <Layouts /> }
    </>
  );
}

export default App;

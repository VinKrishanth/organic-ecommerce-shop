import React from 'react'
import Layouts from "./Layouts/Layouts";
import SignIn from './Pages/Auth/SignUp';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const itemsList = useSelector(state => state.cart.itemsList);
  console.log(itemsList);

  return (
    <>
      {!isLoggedIn && <SignIn /> }
      {isLoggedIn &&  <Layouts /> }
    </>
  );
}

export default App;

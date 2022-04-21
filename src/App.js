
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=> {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

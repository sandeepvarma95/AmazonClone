import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from 'styled-components' 
import { db, auth } from './firebase'
import Login from './Login'

function App() {

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));

  const [ cartItems, setCartItems ] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot)=>{
      const tempItems = snapshot.docs.map((doc)=>({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems);
    })
  }

  const signOut = () => {
      auth.signOut().then(()=>{
        localStorage.removeItem('user')
        setUser(null)
      })
  }

  useEffect(()=>{
    getCartItems();
  },[])

 // console.log(cartItems);

  return (
    <Router>
      {
        !user ? (                                           //if no user is present show the login page
          <Login setUser={setUser}/>
        ):(                                                 //if user is present then login
        <Container>                                         
        <Header 
          signOut={signOut}
          user={user} 
          cartItems={cartItems} />
        <Switch>

          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Container>
        )
      }
     
    </Router>
    
  );
}

export default App;

const Container = styled.div `

`

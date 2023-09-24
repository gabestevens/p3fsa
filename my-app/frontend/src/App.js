import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import Error404 from './Error404'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/sign-up" element={<SignUpForm/>} />
          <Route exact path="/login" element={<LoginForm/>} />
          <Route path="/" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
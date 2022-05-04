  import './App.css';
  import './pages/about.css';
  import React, { useEffect, useState } from 'react';
  import Navbar from './components/Navbar';
  import {
    BrowserRouter as Router,
    Routes,
    Route
  }
  from 'react-router-dom';

  import Home from './pages/index';
  import About from './pages/about';
  import CommentForm from './pages/commentform';
  import NameForm from './pages/nameform';

  import Blogs from './pages/blogs';
  import SignUp from './pages/signup';
  import Contact from './pages/contact';
  import Sessions from './pages/sessions';
  import Test from './pages/test';
  import Student from './pages/student';
  import UserForm from './pages/commentform';

  import FooterPage from './components/footer';

  function App() {
   
    return (
      <Router>
      <Navbar/>

      <Routes>
      <Route exact path = '/home'
       element = {
        <Home/>
      }
      />
      <Route path = '/about'
      element = {
        <About/>
      }
      />
      <Route path = '/contact'
      element = {
        <Contact/>
      }
      />
       <Route path = '/student'
      element = {
        <Student/>
      }
      />  
        <Route path = '/test'
      element = {
        <Test/>
      }
      />  
       <Route path = '/sessions'
      element = {
        <Sessions/>
      }
      />
        <Route path = '/commentform'
      element = {
        <CommentForm/>
      }
      />  <Route path = '/nameform'
      element = {
        <NameForm/>
      }
      />
      <Route path = '/blogs'
      element = {
        <Blogs/>
      }/>
      <Route path = '/sign-up'
      element = {
        <SignUp/>
      }
      />
      </Routes>
      <FooterPage/>

  );
      </Router>
    );
  }

  export default App;

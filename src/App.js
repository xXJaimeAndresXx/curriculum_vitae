import React from 'react';
import './App.css';

import Navigation from './components/navigation';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Body/>
      <Footer/>
    </div>

    
  );
}

export default App;

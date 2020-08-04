import React from 'react';
import './App.css';
import './style/style.css';
import Header from './Header.js';
import Main from './Main.js';
import Border from './Border.js';
import Footer from './Footer.js';



function App() {
  return (
    <div className="App">
      <Header />
      <Border />
      <Main />
      <Border />
      <Footer />
    </div>
  );
}

export default App;

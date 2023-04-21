import React from 'react';
import './App.css';
import { Footer, Blog, Possibility, Features, Whatgpt, Header } from './containers'
import { Cta, Brand, Navbar } from './components'
// import logo from './logo.svg';



function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>


  );
}

export default App;

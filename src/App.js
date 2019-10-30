import React from "react";
import './App.css';
import './components/Header/Header.css'
import Header from "./components/Header/Header"
import User from './components/User'
import Navbar from "./components/Navbar"
import Thread from './components/Thread'



function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <User />
      <Thread />
    </div>
  );
}

export default App;

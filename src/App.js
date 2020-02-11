import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
    
      <Navbar />

      <Profile />
      <div className="content">
        <img className="" src="https://devote-movie.info/wp-content/uploads/2019/01/Beaches-in-India_1.jpg" />
      </div>
    </div>
  )
};

export default App;

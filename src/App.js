import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Header />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;

import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route index  element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
          </Routes>
        </div>
      </Router>    
    </FeedbackProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import JobPortal from './JobPortal';
import Login from './login-page';
import LandingPage from './landing-page';

const App = () => {
  return (
      <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<LandingPage />} />
          <Route
            exact
            path="/"
            element={<Login />}
          />
          <Route exact path="/jobsearch" element={<JobPortal />} />
        </Routes>
        </Router>
      </div>
    
  );
};

export default App;

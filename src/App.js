import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </Router>
  );
};

export default App;

/*const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    fontSmooth: "auto", // Ensure smooth fonts
    fontFamily: "sans-serif", // Use a sans-serif font
  },
  logo: {
    width: "100px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    fontSmooth: "auto", // Ensure smooth fonts
    fontFamily: "sans-serif", // Use a sans-serif font
  },
  description: {
    fontSize: "16px",
    color: "#666",
    lineHeight: "1.5",
    fontSmooth: "auto", // Ensure smooth fonts
    fontFamily: "sans-serif", // Use a sans-serif font
  },
};*/

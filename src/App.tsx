import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import MyRoute from './MyRoute';
import 'tailwindcss/tailwind.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";

 
function App() {
  return (
    <div >

      <Router>
        <MyRoute />
      </Router>


    </div>
  );
}

export default App;

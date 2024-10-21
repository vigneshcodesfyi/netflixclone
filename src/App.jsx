import React from "react";
import Accordion from "./components/Accordian";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import JoinUsSection from './components/JoinUsSection'; 

import TrendingSection from './components/TrendingSection'; 
import"./App.css"
import MovieList from "./components/MovieList";


function App() {
  
  return (
    <div className="App">
<Header/>
<Main/>|
<TrendingSection/>     
          <MovieList />
      
<JoinUsSection/>
      <Accordion/>
      <Footer/>
     
    </div>
  );
}

export default App;

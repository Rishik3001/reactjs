import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BannerPage from './components/BannerPage';
import './App.css';
import Cards from './components/Cards';
import React, { useState } from 'react';

export function App() {

  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <Header/>
      <BannerPage setQuery= {setQuery}/>
      <Cards searchQuery = {query}/>
      <Footer/>
    </div>
  );
}

export default App;

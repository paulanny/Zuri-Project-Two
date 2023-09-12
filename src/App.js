import React from 'react';
import Header from './Components/Header';
import CardLists from './Components/CardLists';
import Footer from './Components/Footer';
import MovieDeets from './Components/MovieDeets';
import AboutMovie from './Components/AboutMovie';

function App() {
  return (
    <div>
      <Header />
      <CardLists />
      <Footer />
      <MovieDeets />
      <AboutMovie />
    </div>
  );
}

export default App;

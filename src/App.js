import React from "react";
import './style.css'
import FetchRepo from './components/fetchRepo';
import Navigation from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Errorpage from './components/Errorpage';
import {Helmet} from 'react-helmet';

function App() {
  return <div>
     <Helmet >
        <meta charset="utf-8"/>

        <title>Pelzmagic github portfolio</title>
        <meta name="description" content="Pelzmagic github portfolio repositories" />
        </Helmet>
    <h1>My Github Portfolio</h1>
    <Navigation />
    <h3>My repositories</h3>
    {/* <FetchRepo /> */}
    <Routes>
      <Route path='/' element={<FetchRepo />} />
      <Route path='/errorboundary' element={<ErrorBoundary />} />
      <Route path='*' element={<Errorpage />} />
    </Routes>
  </div>;
}

export default App;
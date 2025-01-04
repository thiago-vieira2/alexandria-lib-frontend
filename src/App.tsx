import React from 'react';

import './App.css';
import Header from './components/header/index.tsx';
import Books from './components/books/index.tsx';

function App() {
  return (
    <div className="App">
     <Header/>
     <Books/>
    </div>
  );
}

export default App;

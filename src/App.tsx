import React from 'react';

import './App.scss';
import Header from './components/header/index.tsx';
import Books from './components/books/index.tsx';

let livros: { namebook: string; nameauthor: string; genderbook: string }[] = [
  {
    namebook: "Cosmos",
    nameauthor: "Carl Sagan", // exemplo de valor para a chave 'nameauthor'
    genderbook: "Ciência",

  },

  {
    namebook: "O hobbit",
    nameauthor: "JJR ", // exemplo de valor para a chave 'nameauthor'
    genderbook: "Vai",
  },
];


function App() {
  return (
    <div className="App">
     <Header/>

     <div className="main">
      {livros.map((livro) => {
        return (
          <Books nameauthor={livro.nameauthor} namebook={livro.namebook} genderbook={livro.genderbook}/>
        )
      })}
        
      
     </div>
    </div>
  );
}

export default App;

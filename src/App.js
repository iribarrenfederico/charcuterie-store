import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './container/ItemListContainer';



function App() {
  
  return (
  
 <div className="App">
      <header>
        <NavBar/>
      </header>
      <ItemListContainer greeting='BIENVENIDOS!' />
    </div>
    
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function aoClicarNaDiv(a, b) {
  console.log(a+b)
}

function App() {
  return (
    <div onClick={ aoClicarNaDiv(3, 5) }>
      Div clicável
    </div>
  )
}

export default App;

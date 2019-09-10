import React from 'react';
import './App.css';
import Header from './components/Header';
import Row from './components/Row';
import { data } from './data';


function App() {
  return (
    <div className="App">
          <Header/>
          {data.map(data => (<Row data={data}/>))}
    </div>
  );
}

export default App;

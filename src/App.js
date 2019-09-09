import React from 'react';
import './App.css';
import Header from './components/Header';
import Row from './components/Row';

const rows = [
  {
    title: 'Experiências',
    itens: [
      {
        name: 'Greenmile',
        date: 'Setembro de 2018 - Agora'
      },
      {
        name: 'SecrelNet',
        date: 'Dezembro de 2015 - Setembro de 2018',
        duration: '2 anos e 10 meses'
      },
      {
        name: 'Fortalnet',
        date: 'Junho de 2015 - Dezembro de 2015',
        duration: '7 meses'
      },
      {
        name: 'CNPQ',
        date: 'Janeiro de 2014 - Março de 2015',
        duration: '1 ano e 3 meses'
      }
    ]
  }
];
function App() {
  return (
    <div className="App">
          <Header/>
          {rows.map(data => (<Row data={data}/>))}
    </div>
  );
}

export default App;

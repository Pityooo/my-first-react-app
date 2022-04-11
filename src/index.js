import React from 'react';
// js objectböl HTML formátumra alakítja
import ReactDOM from 'react-dom';
import Beers from './components/Beers';
import Header from './components/Header';
import data from './data';
import './index.css';

//console.log(<Beers list={data.cards}/>)

ReactDOM.render(
  <React.StrictMode>
    {/* list={dataname} -> átadjuk az adatot a komponensnek (mint egy argument a functionoknál) */}
    <Header/>
    <Beers list={data.cards}/>
  </React.StrictMode>,
  document.getElementById('root')
);
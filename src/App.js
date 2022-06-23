import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import { useState } from 'react';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Button from './components/Evento/Button';
import Condicional from'./components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';


function App() {
  const meusItens=['React','Vue','Angular']
  
  
  const [nome, setNome] = useState()
 

  const url = 'https://via.placeholder.com/150'
  return (
    
    <div className="App">

      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>

      <h1>Renderização lista</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>

      <h1>Renderização Condicional</h1>
      
      <Condicional/>
      <Evento/>
      <Form/>
      
     
      
      

 

      <h1>Olá</h1>
      <p>Meu Primeiro App em React</p>
      
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
      
      
    </div>
  );
}

export default App;

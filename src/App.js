import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Button from './components/Evento/Button';
import Condicional from'./components/Condicional';
import OutraLista from './components/OutraLista';


function App() {
  const meusItens=['React','Vue','Angular']
  const nome = 'Rafael'
  const newName = nome.toUpperCase()
 

  const url = 'https://via.placeholder.com/150'
  return (
    
    <div className="App">
      <h1>Renderização lista</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>

      <h1>Renderização Condicional</h1>
      
      <Condicional/>
      <Evento/>
      <Form/>
      
     
      
      

 

      <h1>Olá {newName}</h1>
      <p>Meu Primeiro App em React</p>
      
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
      <SayMyName nome="Rafael"/>
      <SayMyName nome="Rafaela"/>
      <Pessoa nome="Rafael" idade="28" profissao="tecnico" foto="https://www.mobilegamer.com.br/wp-content/uploads/2021/02/01c704e3c3a702ebe71fb8709bc98fd2-1.jpg"/>
      
    </div>
  );
}

export default App;

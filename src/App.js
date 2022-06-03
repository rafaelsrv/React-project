import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  const nome = 'Rafael'
  const newName = nome.toUpperCase()
  function sum(a,b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <List/>
      <Frase/>
      <Frase/>
      <h1>Olá {newName}</h1>
      <p>Meu Primeiro App em React{2+2}</p>
      <p>Valor soma = {sum(1,5)}</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
      <SayMyName nome="Rafael"/>
      <SayMyName nome="Rafaela"/>
      <Pessoa nome="Rafael" idade="28" profissao="tecnico" foto="https://www.mobilegamer.com.br/wp-content/uploads/2021/02/01c704e3c3a702ebe71fb8709bc98fd2-1.jpg"/>
      
    </div>
  );
}

export default App;

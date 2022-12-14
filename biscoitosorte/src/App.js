import React, { Component } from 'react'; 
import './index.css';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ""
    };
this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases =[
      'a vida é para quem vive!','Quem com ferro fere, fica sempre ferrado',
      'Mas vale o trabalho honesto, que desonestamente roubar!',
      'tudo que gira, uma hora para!','o amor é para os fortes de alma, e fraco de emoção',
      'Sonhe acordado, do que dormindo.'
    ];

  }
  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    state.textoFrase = '" '+ this.frases[numeroAleatorio] +' "'
    this.setState(state)
  }
  render(){
    return(
      <div className='container'>
         <img src={require('./assets/biscoito.png')} className="img" />
         <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
         <h3 className='textofrase'>{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}
export default App;

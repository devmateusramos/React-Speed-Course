import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {
  state = {
    comentarios: [
      {
        nome: 'Mateus',
        email: 'mateus@gmail.com',
        mensagem: 'Olá, tudo bem?',
        data: new Date(2021, 9, 19),
      },
      {
        nome: 'Ana',
        email: 'ana@gmail.com',
        mensagem: 'Olá, tudo sim...',
        data: new Date(2021, 9, 22),
      },
    ],
  };

  adicionandoComentario = () => {
    console.log('Adicionando comentário...');

    const novoComentario = {
      nome: 'Maria',
      email: 'maria@gmail.com',
      data: new Date(),
      mensagem: 'Olá pessoal!',
    };

    // let lista = this.state.comentarios;
    // lista.push(novoComentario);

    // this.setState({ comentarios: lista }); // isso pode ser feito com spreed operator
    this.setState({ comentarios: [...this.state.comentarios, novoComentario] });
  };

  render() {
    return (
      <div className='App'>
        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}
          >
            {comentario.mensagem}
          </Comentario>
        ))}

        <button onClick={this.adicionandoComentario}>
          Adicionar um comentário
        </button>
      </div>
    );
  }
}

export default App;

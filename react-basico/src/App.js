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
    novoComentario: {
      nome: '',
      email: '',
      mensagem: '',
    },
  };

  adicionarComentario = (evento) => {
    evento.preventDefault();
    console.log('Adicionando comentário...');

    const novoComentario = { ...this.state.novoComentario, data: new Date() };

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', mensagem: '' },
    });
  };

  removerComentario = (comentario) => {
    let lista = this.state.comentarios;
    lista = lista.filter((c) => c !== comentario);

    this.setState({ comentarios: lista });
  };

  digitacaoDoNome = (evento) => {
    const value = evento.target.value;
    this.setState({
      novoComentario: { ...this.state.novoComentario, nome: value },
    });
    console.log(evento);
  };

  digitacao = (evento) => {
    // const value = evento.target.value;
    // const name = evento.target.name; // dá um destructuring
    const { name, value } = evento.target;
    this.setState({
      novoComentario: { ...this.state.novoComentario, [name]: value },
    });
    console.log(evento);
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
            onRemove={this.removerComentario.bind(this, comentario)}
          >
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method='post' onSubmit={this.adicionarComentario}>
          <div>
            <input
              type='text'
              name='nome'
              value={this.state.novoComentario.nome}
              onChange={this.digitacao}
              required
              placeholder='digite seu nome'
            />
          </div>
          <div>
            <input
              type='email'
              name='email'
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              required
              placeholder='digite seu email'
            />
          </div>
          <div>
            <textarea
              name='mensagem'
              rows='4'
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao}
              required
            />
          </div>
          <button type='submit'>Adicionar Comentário</button>
        </form>
      </div>
    );
  }
}

export default App;

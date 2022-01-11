import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import "./assets/App.css";
import './assets/index.css';

export default class App extends Component {

    constructor() {
       super();
       this.notas = []
    }
    criarNota(titulo, texto) {
        const novaNota = { titulo, texto };
        this.notas.push(novaNota);
        console.log(this.notas.length);
    }

   render() {
       return (
        <section className='conteudo'>
            <FormularioCadastro criarNota={this.criarNota.bind(this)} />
            <ListaDeNotas notas={this.notas} />  
        </section>
      );
   }
}

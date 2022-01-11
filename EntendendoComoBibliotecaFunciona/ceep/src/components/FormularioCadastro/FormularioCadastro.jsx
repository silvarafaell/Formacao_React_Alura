import React, { Component } from "react";
import "./estilo.css";

export default class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
  }

  handleMudancaTitulo(evento) {
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }

  render() {
    return (
      <form className="form-cadastro">
        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Titulo"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          className="form-cadstro_input"
          placeholder="Escreva sua nota..."
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

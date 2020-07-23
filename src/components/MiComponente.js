import React, { Component } from "react";

export default class MiComponente extends Component {
  render() {
    return (
      <div>
        <h2>MiComponente</h2>
        <p>Hola desde el componente</p>
        <p>Texto: {this.props.texto}</p>
        <button onClick={() => this.props.incrementarContador(2)}>Incrementar</button>
      </div>
    );
  }
}

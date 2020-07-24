import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { updateUserStatus } from '../redux/actions'

// Bootstrap
import { Button } from "react-bootstrap";

const mapStateToProps = (state) => {
  console.log("redux state:", state);
  return {
    status: state.user.status,
  };
};

class MiComponente extends Component {
  incrementarEstado = () => {
    this.props.updateUserStatus(this.props.status + 1);
  }
  render() {
    return (
      <div>
        <h2>MiComponente</h2>
        <p>Hola desde el componente</p>
        <p>Texto: {this.props.texto}</p>
        <Button onClick={() => this.incrementarEstado()}>Incrementar</Button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { updateUserStatus }
  )(MiComponente)
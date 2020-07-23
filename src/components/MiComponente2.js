import React, { Component } from "react";

export default class MiComponente2 extends Component {
  render() {
    const { id, title, description } = this.props; // const id = this.props.id; const title = this.props.title
    return (
      <div>
        <h2>{title}</h2>
        <p>id: {id}</p>
        <p>{description}</p>
      </div>
    );
  }
}

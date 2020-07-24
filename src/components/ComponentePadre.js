import React, { Component } from "react";

// Constants
import { backendURL } from "../config/Constants";

// Components
import MiComponente from "./MiComponente";
import MiComponente2 from "./MiComponente2";

// Redux
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log("redux state:", state);
  return {
    status: state.user.status,
  };
};

class ComponentePadre extends Component {
  state = {
    name: "David",
    type: 0,
    texto: "Hola2",
    data: [],
  };
  componentDidMount() {
    fetch(backendURL + "/getData", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        if (response) {
          this.setState({ data: response });
          console.log("Success:", response);
        }
      });
  }

  computeStyle = (type) => {
    return type === 0 ? "purple" : "gray";
  };

  renderizarDatos = () => {
    const { data } = this.state;
    if (data && data.length) {
      return data.map((element) => {
        return (
          <MiComponente2
            key={element.id}
            id={element.id}
            title={element.title}
            description={element.description}
          />
        );
      });
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <h2 style={styles.title}>Titulo: {this.state.name}</h2>
        <h4 style={{ color: this.computeStyle(this.state.type) }}>Subtitulo</h4>
        <p className={"content"}>Hola mundo</p>
        <p>Status: {this.props.status}</p>
        <MiComponente texto={this.state.texto} />
        {this.renderizarDatos()}
      </div>
    );
  }
}

const styles = {
  title: {
    color: "red",
  },
};

export default connect(mapStateToProps)(ComponentePadre);

import React from "react";
import PropTypes from 'prop-types'

export default class NameAndSurname extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      surname: props.surname
    };
  }

  // con esta sintaxis no hace falta bindear el metodo
  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // onNameChange = event => {
  //   this.setState({
  //     name: event.target.value
  //   });
  // };

  // onSurnameChange = event => {
  //   this.setState({
  //     surname: event.target.value
  //   });
  // };

  render() {
    const { name, surname } = this.state
    return (
      <div>
        <h1>
          {name} {surname}
        </h1>

        <input
          type="text"
          value={name}
          onChange={this.onInputChange}
          placeholder="Name"
          name="name"
        />

        <input
          type="text"
          value={surname}
          onChange={this.onInputChange}
          placeholder="Surname"
          name="surname"
        />
      </div>
    );
  }
}

NameAndSurname.defaultProps = {
  name: "Elias",
  surname: "Rosales"
}
// https://es.reactjs.org/docs/typechecking-with-proptypes.html
// tambien podemos tipar elementos
NameAndSurname.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
}
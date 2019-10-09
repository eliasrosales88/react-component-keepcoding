import React, { Component } from 'react';
import { render } from 'react-dom';
import NameAndSurname from './NameAndSurname';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      surname: 'Class'
    };
  }

  render() {
    return (
      <div>
        <NameAndSurname 
          name={this.state.name} 
          surname={this.state.surname} 
        />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

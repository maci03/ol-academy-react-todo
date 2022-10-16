import React from 'react';
import Form from './components/Form/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  render() {
    return (
      <div className="App">
        <Form todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

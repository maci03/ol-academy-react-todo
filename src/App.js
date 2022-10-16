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

  handleAddTodo = (newTodo) => this.setState({todos: [...this.state.todos, newTodo] });

  render() {
    return (
      <div className="App">
        <Form todos={this.state.todos} onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;

import React from "react";

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: "",
      title2: "ghghgh"
    }
  }

  handleChange = (e) => this.setState({ title: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault()
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} onChange={this.handleChange} />
        <button type="submit">დამატება</button>
      </form>
    )
  }
}

export default Form;

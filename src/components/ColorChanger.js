import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps(newProp) {
    this.setState({
      allowEdit: newProp.allowEdit
    })
  }

  render() {
    return (
      <select 
        className="dropDownContainer" 
        onChange={(e) => this.props.update(e.target.value)}
        disabled={this.state.allowEdit === "false"}>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}
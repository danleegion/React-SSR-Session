import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      name: '',
      msg: ''
    };
  }

  //Handlers
  handleButtonClick = (e) => {
    const nameLen = this.state.name.length;
    if (nameLen > 0) {
      this.setState({
        msg: `You name has ${nameLen} characters including space`
      });
    }
    e.preventDefault();
  };

  handleTextChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleReset = (e) => {
    this.setState({ name: '', msg: '' });
    e.preventDefault();
  };
  //End Handlers

  render() {
    let msg;

    if (this.state.msg !== '') {
      msg = <p>{this.state.msg}</p>;
    } else {
      msg = '';
    }
    return (
      //do something here where there is a button that will replace the text
      <form id="myForm" name="formName" method="post">
        <div>
          <label>Your name </label>
          <input
            type="text"
            id="txtName"
            name="txtName"
            value={this.state.name}
            onChange={this.handleTextChange}
          />
          <button type="button" id="btnCalc" onClick={this.handleButtonClick}>
            Calculate Name Length
          </button>
          <button type="button" id="btnReset" onClick={this.handleReset}>
            Reset All
          </button>
          <hr />
          {msg}
        </div>
        <button type="submit" id="submitPage">
          Submit for Session
        </button>
      </form>
    );
  }
}
export default App;

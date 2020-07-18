import React from 'react';

class CheckSession extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { inputName } = this.props;
    return (
      <>
        <h3>Value Submittted</h3>
        Your name is : {inputName}
      </>
    );
  }
}
export default CheckSession;

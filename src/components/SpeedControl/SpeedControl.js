import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {


  handleClick = (event, prop) => {
    if(prop === 'up'){
      this.props.dispatch({type: prop, payload: 1});
    }
    else if(prop === 'down'){
      this.props.dispatch({type: prop});
    }
  }

  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={event => this.handleClick(event, 'up')}>Increase Speed</button>
        <p>SPEED: {this.props.reduxState.speed}</p>
        <button onClick={event => this.handleClick(event, 'down')}>Decrease Speed</button>
      </div>
    )
  }
}
const reduxOnDOM = reduxState => ({ reduxState });
export default connect(reduxOnDOM)(SpeedControl);
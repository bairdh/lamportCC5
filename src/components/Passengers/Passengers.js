import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }
 
  handleClick = (event, prop) =>{
     this.props.dispatch({type: prop, payload:this.state.name})     
  }


  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input onChange={event => this.handleChange(event)} type="text" name="name" placeholder="Enter Name" />
        <button onClick={event => this.handleClick(event, 'person')}>Add Passenger</button>

    <ul>PASSENGER LIST:
       {this.props.reduxState.people.map(person => <li key={person}>{person}</li>)}

    </ul>
      
      </div>
    )
  }
}
const reduxOnDOM = reduxState => ({ reduxState });
export default connect(reduxOnDOM)(Passengers);
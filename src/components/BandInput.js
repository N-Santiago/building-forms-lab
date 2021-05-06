// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  
  render() {
    return(
      <div>
        Band Input
      </div>
    )
  }
}

export default BandInput

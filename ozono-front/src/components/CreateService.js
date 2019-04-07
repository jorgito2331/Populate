import React, { Component } from 'react'

class CreateService extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: props.user.id,
      atendend: '',
      description: '',
      price: '',
      type: '',
      dateStart: new Date()
    }
  }

  render(){
    return(
      <div></div>
    )
  }
}

export default CreateService
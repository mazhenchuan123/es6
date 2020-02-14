import React from 'react'
import FormMaps from './formMap'

export default class Demo extends React.Component {
  state = {
    username: 'benjycui',
    password: '123456',
    email: 'xsa@qq.com',
  }

  handleFormChange = allValues => {
    this.setState({...allValues})
  }

  render() {
    const { username, password, email } = this.state

    return (
      <div>
        <FormMaps
          {...this.state}
          onChange={this.handleFormChange} 
        />
        <h1>username: {username}</h1>
        <h1>password: {password}</h1>
        <h1>email: {email}</h1>
      </div>
    )
  }
}

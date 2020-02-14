import React from 'react'
import { connect } from 'react-redux'
import { Form, Input } from 'antd'

export default @Form.create({
  name: 'global_state', 
  
  mapPropsToFields(props) {
    //   console.log(props)
    return {
      username: Form.createFormField({
        value: props.username,
      }),
      password: Form.createFormField({
        value: props.password,
      }),
      email: Form.createFormField({
        value: props.email,
      })
    }
  },
  onValuesChange(props, values, allValues) {
    props.onChange(allValues)
  },
})
class CustomizedForm extends React.Component {
  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <Form layout="inline">
        <Form.Item label="Username">
          {
            getFieldDecorator('username', {
              rules: [{ required: true, message: 'Username is required!' }],
            })(
              <Input />
            )
          }
        </Form.Item>
        <Form.Item label="Password">
          {
            getFieldDecorator('password', {
              rules: [{ required: true, message: 'Username is required!' }],
            })(
              <Input />
            )
          }
        </Form.Item>
        <Form.Item label="Email">
          {
            getFieldDecorator('email', {
              rules: [{ required: true, message: 'Username is required!' }],
            })(
              <Input />
            )
          }
        </Form.Item>
      </Form>
    )
  }
}

import React, { Component } from 'react'
import { v1 as uuid } from 'uuid'
import { connect } from 'react-redux'

import Alert from './Alert'
import { createPost, showAlert } from '../actions/actions'

const initialState = {
  title: ''
}

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  handleSubmit = event => {
    event.preventDefault()
    const { title } = this.state;

    if(!title.trim()){
      return this.props.showAlert('Post title could not be blank')
    }

    const newPost = { title, id: uuid() }
    console.log(newPost)
    this.props.createPost(newPost)
    this.setState(initialState)
  }

  handleChange = event => {
    event.persist()
    this.setState(prevState => ({
      ...prevState,
      ...{
        [event.target.name]: event.target.value
      }
    }))
  }

  render() {
    const { title } = this.state
    const { alert } = this.props
    return (
      <div>
        {alert && <Alert text={alert}/>}
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button className="btn btn-success" type="submit">Create Post</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

const mapDispatchToProps = {
  createPost, showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)

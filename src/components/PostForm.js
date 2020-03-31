import React, { Component } from 'react'
import { v1 as uuid } from 'uuid'
import { connect } from 'react-redux'

import { createPost } from '../actions/posts'

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
      return
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
    const { title } = this.state;
    return (
      <div>
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

const mapDispatchToProps = {
  createPost
}

export default connect(null, mapDispatchToProps)(PostForm)

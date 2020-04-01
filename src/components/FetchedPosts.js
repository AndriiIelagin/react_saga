import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Post from './Post'
import { fetchPosts } from '../actions/posts'

const FetchedPosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.fetchedPosts)

  if(!posts.length) {
    return (
      <button 
        className="btn btn-primary" 
        onClick={() => dispatch(fetchPosts())}
      >
        Load Posts
      </button>
    )
  }
  return posts.map(post => <Post post={post} key={post.id}/>)
}

export default FetchedPosts
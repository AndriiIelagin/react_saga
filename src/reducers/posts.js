import { CREATE_POST } from "../actions/types"

const initialState = {
  posts: [],
  fetchedPosts: []
}

export const posts = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] }

    default:
      return state
  }
}
import { CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types";

export const createPost = post => ({
  type: CREATE_POST,
  payload: post
})

export const showLoader = () => ({ type: SHOW_LOADER })

export const hideLoader = () => ({ type: HIDE_LOADER })

export const showAlert = text => {
  return dispatch => {
    dispatch({ type: SHOW_ALERT, payload: text })

    setTimeout(() => {
      dispatch({ type: HIDE_ALERT })
    }, 3000)
  }
}

export const hideAlert = () => ({ type: HIDE_ALERT })

export const fetchPosts = () => async dispatch => {
  try {
    dispatch(showLoader())
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const parsedJson = await response.json()
    setTimeout(() => {
      dispatch({ type: FETCH_POSTS, payload: parsedJson })
      dispatch(hideLoader())
    }, 500)
  } catch (error) {
    dispatch(showAlert('Something went wrong...'))
    dispatch(hideLoader())
  }
}
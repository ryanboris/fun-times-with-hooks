import React, { useContext, useReducer } from 'react'
import PostsContext from '../context/context'
import reducer from '../reducer/reducer'
import Posts from '../containers/Posts'
import Form from '../containers/Form'

export default function App() {
  const initialState = useContext(PostsContext)
  const [ state, dispatch ] = useReducer(reducer, initialState)
  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      <Posts />
      <Form />
    </PostsContext.Provider>
  )
}

import React from 'react'

/**
 * Set up context for Posts using React.createContext()
 * React.createContext() takes an argument which represents the initialState or shape of the state you are going for
 */
const PostsContext = React.createContext({
  posts: [ { id: 0, title: 'test post', content: 'test test test test' } ]
})

export default PostsContext

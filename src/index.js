import React, { useContext, useReducer, useState } from 'react'
import { render } from 'react-dom'
import uuidv4 from 'uuid'

const PostsContext = React.createContext({
  posts: [ { id: 0, title: 'test post', content: 'test test test test' } ]
})

function reducer(state, action) {
  if (action.type === 'ADD POST') {
    return {
      ...state,
      posts: [ ...state.posts, action.payload ]
    }
  }
}

function Posts() {
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')
  const { state, dispatch } = useContext(PostsContext)
  console.log(state)
  return (
    <div>
      {state.posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}

      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch({
            type: 'ADD POST',
            payload: { title, content, id: uuidv4() }
          })
          setTitle('')
          setContent('')
        }}
      >
        <input
          type="text"
          placeholder="enter title"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter title"
          name="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

function App() {
  const initialState = useContext(PostsContext)
  const [ state, dispatch ] = useReducer(reducer, initialState)
  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      <Posts />
    </PostsContext.Provider>
  )
}

render(<App />, document.getElementById('root'))

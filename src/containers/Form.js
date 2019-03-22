import React, { useState, useContext } from 'react'
import PostsContext from '../context/context'
import uuidv4 from 'uuid'

export default function Form() {
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')
  const { dispatch } = useContext(PostsContext)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'ADD_POST',
      payload: { title, content, id: uuidv4() }
    })
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
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
  )
}

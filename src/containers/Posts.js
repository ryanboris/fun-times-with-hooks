import React, { useContext } from 'react'
import PostsContext from '../context/context'
import Post from '../components/Post'

export default function Posts() {
  const { state } = useContext(PostsContext)
  return (
    <div>
      {state.posts.map(({ id, title, content }) => (
        <div key={id}>
          <Post title={title} content={content} />
        </div>
      ))}
    </div>
  )
}

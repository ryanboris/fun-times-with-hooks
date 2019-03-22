import React from 'react'

const Post = ({ title, content }) => (
  <React.Fragment>
    <h1>{title}</h1>
    <p>{content}</p>
  </React.Fragment>
)

export default Post

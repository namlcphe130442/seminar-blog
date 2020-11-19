import React from "react"
import "./post.css"

const Post = ({ title, time, image, content }) => {
  return (
    <article>
      <div className="title">
        <div>
          <img src={image} alt={title} />
        </div>
        <div className="title_info">
          <h2>{title}</h2>
          <time>{time}</time>
        </div>
      </div>
      <div className="content">{content}</div>
      <div className="read-more">
        <button>Keep Reading &rarr;</button>
      </div>
    </article>
  )
}

export default Post

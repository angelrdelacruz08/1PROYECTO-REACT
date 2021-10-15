import React from 'react'

const Publication = ({title, author, fecha, content}) => {
  return (
    <article className="publication l-block">
      <div className="publication__container">
        <h2 className="publication_title t3">{title}</h2>
        <span><b>{author}</b> a las {fecha}</span>
        <div className="piblication__content"></div>
          <p>{content}</p>
      </div>
    </article>
    
  )
}
export default Publication


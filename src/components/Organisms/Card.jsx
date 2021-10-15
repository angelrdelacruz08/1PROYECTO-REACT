import React from 'react'

export const Card = ({picture, name}) => {
  return (
    <article className="card s-border">
    <div className="img-container s-ratio-16-9">
        <img src={picture} alt={name} />  
    </div>
    <div className="card__data s-pxy-2"> 
      <h3 className="t4 center">{name}</h3>
    </div>
  </article>
  )
}

export default Card

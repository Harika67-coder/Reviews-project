import React from 'react'

const Person = ({id,name,job,image,text}) => {
  return (
    <article key={id} className>
      <div>
        <img src={image} alt={name}/>
      </div>
      <h4>{name}</h4>
      <p style={{fontSize:"15px"}}>{job.toUpperCase()}</p>
      <p>{text}</p>
      <button>Suprise Me</button>
    </article>
  )
}

export default Person
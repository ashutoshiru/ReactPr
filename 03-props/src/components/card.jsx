import React from 'react'

const card = (props) => {
  return (
    <div className="cards">
        <img src={props.link} alt="Cows-grazing-image" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
    </div>

  )
}

export default card

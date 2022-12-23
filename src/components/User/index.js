import React from 'react'

function User({name,desc}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://picsum.photos/id/237/200/100"
        className="card-img-top"    
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {desc}
        </p>
        <a href="!#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  )
}

export default User
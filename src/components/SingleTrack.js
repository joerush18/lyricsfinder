import React from 'react'


const SingleTrack = props => {
    return (
    <div className="col-sm-6 ">
    <div className="card m-2 mt-2">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.artistname}</p>
        <button onClick = {props.click} className="btn btn-primary">Lyrics</button>
      </div>
    </div>
  </div>
)
}



export default SingleTrack;

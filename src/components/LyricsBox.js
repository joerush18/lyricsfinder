import React from 'react'

const LyricsBox = ( props ) => {
    return (
 <div>
<div className="card">
  <h5 className="card-header">{ props.title}</h5>
  <div className="card-body">
    <h5 className="card-title">{props.singer}</h5>
    <p className="card-text">{props.lyrics}</p>
    <a href="#" className="btn btn-primary">{props.cancel}</a>
  </div>
</div>
        </div>
    )
}

export default LyricsBox


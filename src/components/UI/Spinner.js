import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Spinner = props => {
    return (
       <div className= 'text-center'>
        <div>
      <div className="spinner-border" role="status">
    <span className="sr-only">Loading </span>
  </div>
</div>
</div>
    )
}



export default Spinner

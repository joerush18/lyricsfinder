import React  from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Searchbox = props => {


    return (
      <div className = 'container-fluid mt-5 '>
      <form className="form-inline offset-md-5">
      <input className="form-control mr-sm-2" type="search" placeholder="Enter the song, artist, album" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      <div>

      </div>
      </form>
        </div>
    )
}


export default Searchbox

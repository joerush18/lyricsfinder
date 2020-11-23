import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const REQ_ID_by_Artistname = `matcher.track.get?q_track=a%20te&q_artist=${Artistname}&f_has_lyrics=1&apikey=${API_KEY}`


const Searchbox = props => {

  
// const onSubmitHandler = (event) => {
//  event.preventDefault();
//  setArtistname(event.target.value);
//  console.log(Artistname)
// }


return (
      <div className = 'container-fluid mt-5 '>
      <form className="form-inline offset-md-5" >
      <input className="form-control mr-sm-2" type="search" placeholder='Enter artist name' aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
      <div>
      </div>
      </form>
      </div>
    )
}


export default Searchbox

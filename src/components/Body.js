import React, { useEffect , useState } from 'react';
import Instance from '../Axios';
import SingleTrack from './SingleTrack';
import Spinner from './UI/Spinner';



const API_KEY = 'd202f1e62b3af62627c5c2f36246f4f1';
let REQ_ID = `chart.tracks.get?page=6&page_size=6&country=us&f_has_lyrics=10&apikey=${API_KEY}`;

const Body = (props) => {

const [Tracks , setTracks] = useState([]);
const [Error , setError] = useState(' ');
const [Spin , setSpin] = useState(false);



useEffect(() => {
    setSpin(true)
    Instance.get(REQ_ID)
    .then(track => {setTracks(track.data.message.body.track_list); setSpin(false)}).catch(error => setError(error)) }, [])


useEffect(()=> console.log(props))





const getIdHandler = (trackId,trackName,trackArtist) => {
    let queryEncode = [encodeURIComponent(trackId), encodeURIComponent(trackName), encodeURIComponent(trackArtist)]
    props.history.push({
        pathname : '/lyrics',
        search : '?' + queryEncode.join('&'),

    })
}



let song = Tracks.map((track) => {
     return <SingleTrack key={track.track.album_id} 
                         title= {track.track.album_name} 
                         artistname = {track.track.artist_name}
                         click = {() => getIdHandler(track.track.track_id ,track.track.album_name,track.track.artist_name )}/>
 })



if (Spin)
 { song = <Spinner/> }


let error = null;
if(Error){
error = <h1 style ={{color:'red'}}>{Error}</h1>
}


return(
    <div>
     <div className = 'container mt-5 '>
      <div className='row  align-items-center'>
  <svg width="2em" height="2em" viewBox="0 0 16 16" className=" align-center textbi bi-file-earmark-music-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.572 2.572 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377.5 0 .974-.134 1.338-.377.36-.24.662-.628.662-1.123V8.89l2-.5V6.64z"/>
</svg>
        <h4>Today's top 6 hits</h4>
    </div>
     <div className = 'row '>
     {song}
     <div>
     {error}
     </div>
     </div>
    </div>
    </div>  
);  
}
export default Body

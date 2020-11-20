import React, { useEffect , useState } from 'react';
import Instance from '../Axios';
import SingleTrack from './SingleTrack';


const API_KEY = 'd202f1e62b3af62627c5c2f36246f4f1';

const Body = (props) => {

const [Tracks , setTracks] = useState([]);
const [TrackId , setTrackId]  = useState('');

useEffect(() => Instance.get(`chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=10&apikey=${API_KEY}`)
 .then(track => 
     setTracks(track.data.message.body.track_list)), [])

useEffect(()=> console.log(Tracks),[Tracks])

const getIdHandler = (albumId) => {
   setTrackId(albumId)
   console.log(TrackId)
    }

useEffect(() => Instance.get(`track.lyrics.get?track_id=${TrackId}&apikey=${API_KEY}`)
    .then(track => 
        console.log(track)), [TrackId])


 const song = Tracks.map((track) => {
     return <SingleTrack key={track.track.album_id} 
                         title= {track.track.album_name} 
                         artistname = {track.track.artist_name}
                         click = {() => getIdHandler(track.track.track_id)}
                          />
 })

return(
    <div className = 'container mt-5 '>
    <div className= 'row bg-light '>
     {song}
    </div>
    </div>
    
);  
}



export default Body

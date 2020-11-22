import React, { useEffect , useState } from 'react';
import Instance from '../Axios';
import SingleTrack from './SingleTrack';
import Spinner from './UI/Spinner';
import Header from './Header';
import SearchBox from './Searchbox';
import LyricsBox from './LyricsBox';



const API_KEY = 'd202f1e62b3af62627c5c2f36246f4f1';
let REQ_ID = `chart.tracks.get?page=2&page_size=4&country=us&f_has_lyrics=10&apikey=${API_KEY}`;

const Body = (props) => {

const [Tracks , setTracks] = useState([]);
const [TrackId , setTrackId]  = useState(' ');
const [TrackName , setTrackName]  = useState(' ');
const [TrackArtist , setTrackArtist]  = useState(' ');
const [Lyrics , setLyrics] = useState([]);
const [Error , setError] = useState(' ');
const [Spin , setSpin] = useState(false);
const [Artistname , setArtistname] = useState('Search by artist') 



useEffect(() => {
    setSpin(true)
    Instance.get(REQ_ID)
    .then(track => {setTracks(track.data.message.body.track_list); setSpin(false)}).catch(error => setError(error)) }, [])


useEffect(()=> console.log(Tracks),[Tracks])


useEffect(() => {
   Instance.get(`track.lyrics.get?track_id=${TrackId}&apikey=${API_KEY}`)
   .then(res => setLyrics(res.data.message.body.lyrics.lyrics_body)).catch(error=> {})},[TrackId])


const getIdHandler = (trackId,trackName,trackArtist) => {
    setTrackId(trackId)
    setTrackName(trackName)
    setTrackArtist(trackArtist)
}


const onSubmitHandler = (event) => {
 event.preventDefault();
 setArtistname(event.target.value);
 console.log(Artistname)
}
let song = Tracks.map((track) => {
     return <SingleTrack key={track.track.album_id} 
                         title= {track.track.album_name} 
                         artistname = {track.track.artist_name}
                         click = {() => getIdHandler(track.track.track_id ,track.track.album_name,track.track.artist_name )}/>
 })



if (Spin) { song = <Spinner/> }


let error = null;
if(Error){
error = <h1 style ={{color:'red'}}>{Error}</h1>
}

let lyricbox = null;
if(Lyrics){
    lyricbox = <LyricsBox title = {TrackName} singer = {TrackArtist} cancel = 'Cancel'
        lyrics = {Lyrics}/>
}

return(
    <div>
     <Header/>
     <SearchBox submit = {onSubmitHandler} value = {Artistname}/>
     <div className = 'container mt-5 '>
     <div className = 'row bg-light '>
     {song}
     <div>
    </div>
    {error}
    {lyricbox}
    </div>
    </div>
    </div>

   
);  
}
export default Body

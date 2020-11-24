import React, {useState , useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SingleTrack from './SingleTrack';
import Instance from '../Axios';
import Spinner from './UI/Spinner';


const API_KEY = 'd202f1e62b3af62627c5c2f36246f4f1';

const SearchResult = props => {
    const [ArtistName , setArtistName] = useState('')
    const [SearchedTracks , setSearchedTracks] = useState([])
    const [Spin , setSpin] = useState(false)
     
    
    useEffect(() => {
      
        setSpin(true);
        fetchData();
        },[])
          


const fetchData= ()=>{
    // i dont know why i used this crazylogic.
   let Artistname = props.location.search.replace('?', '');
   setArtistName(Artistname);
   let REQ_ID = `track.search?q_artist=${ArtistName}&page_size=4&page=1&s_track_rating=desc&f_has_lyrics&apikey=${API_KEY}`
           Instance.get(REQ_ID).then(res => {
           setSearchedTracks(res.data.message.body);
           setSpin(false)
           console.log(SearchedTracks)})
}

let body = <Spinner/>;
if(!Spin){
    body = (SearchedTracks.map((items) =>{
        return (
    <SingleTrack 
    key = {items.track_id}
    title = {items.track_name}
    artistname = {items.artist_name}  />
        )
    }) )
 }
    return (
        <div>
      {body}
        </div>
    )
}
export default SearchResult

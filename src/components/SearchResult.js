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
   let REQ_ID = `track.search?q_artist=${ArtistName}&page_size=6&page=1&s_track_rating=desc&f_has_lyrics&apikey=${API_KEY}`
           Instance.get(REQ_ID).then(res => {
               console.log(res.data.message)
           setSearchedTracks(res.data.message.body.track_list);
           setSpin(false)
        }).catch(err => alert(err))
}

const getIdHandler = (trackId,trackName,trackArtist) => {
    let queryEncode = [encodeURIComponent(trackId), encodeURIComponent(trackName), encodeURIComponent(trackArtist)]
    props.history.push({
        pathname : '/lyrics',
        search : '?' + queryEncode.join('&'),

    })
}

let body = <Spinner/>;
if(!Spin){
    body = (SearchedTracks.map((items) =>{
        return (
    <SingleTrack 
    key = {items.track.track_id}
    title = {items.track.track_name}
    artistname = {items.track.artist_name} 
    click = {() => getIdHandler(items.track.track_id ,items.track.album_name,items.track.artist_name )} />
        )
    }) )
 }
    return (
          
     <div>
     <div className = 'container mt-5 mr-auto text-center'>
      <div className='row text-center'>
        <h4 style= {{ textTransform : 'capitalize'}}>Songs by {ArtistName}</h4>
      </div>
    <div className = 'row '>
    {body}
     </div>
    </div> 
 </div>
    )
}
export default SearchResult

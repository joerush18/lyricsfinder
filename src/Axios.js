import Axios from 'axios';






const instance = Axios.create({
    baseURL : `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/`,
}
)


export default instance;
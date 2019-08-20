/*-------------- 1. axios : all actions need to access axios for data --------------------*/
import axios from 'axios';
// 2. url of our data
const URL = 'http://localhost:3004';


export function artistList(keywords){
    const request = axios.get(`${URL}/artists?q=${keywords}`)
    .then(response => response.data);

    return {
        type : 'GET_ARTISTS',
        payload : request,
    }
}


export function artistsListAll(){
    //4. request has data : payload needed 
    const request = axios.get(`${URL}/artists?_limit=12`)
                        .then(response => response.data);
//3. return : type and payload 
    return {
        type : 'GET_ARTISTS_ALL',
        payload : request,
    }
}

export function artistDetail(id){
    const request = axios.get(`${URL}/artists?id=${id}`)
    .then(response => response.data);

    return {
        type : 'GET_ARTISTS_DETAIL',
        payload : request,
    }
}



export function clearArtistDetail(){
   
    return {
        type : 'CLEAR_ARTISTS_DETAIL',
        payload : null ,  
    }
}
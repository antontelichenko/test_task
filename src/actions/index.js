import axios from 'axios';
const URL = 'http://localhost:3004';

export function allPages(){

    const request=axios.get(`${URL}/users`)
        .then(response=>response.data)

    return{
        type:'GET_PAGES_ALL',
        payload: request
    }


}
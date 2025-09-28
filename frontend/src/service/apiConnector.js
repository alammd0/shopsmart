import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/v1/'

// instance of axios
export const apiInstance = axios.create({
    baseURL : BASE_URL,
    timeout : 1000,
});

// custom axios function
export const APIConnector = async ({method, url, data, headers = {}, token}) => {
    try{
        const reponse = await apiInstance({
            method,
            url,
            data,
            headers : {
                ...headers,
                Authorization : `${token}`,
            },
            withCredentials : true,
        }) ;

        return reponse
    }

    catch(error){
        console.log(error)
    }
}
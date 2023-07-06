import axios, { HttpStatusCode } from "axios";

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export let GetCommunities = async () => {
    const response = await axios('http://localhost:8000/communities', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            mode: 'no-cors',
          }
    });

    if(!response.status){
        throw new Error("Failed to fetch communities");
    }

    return response.data;
}

export let GetCommunity = async (name: string) => {
    const response = await axios(`http://localhost:8000/posts/${name}`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            mode: 'no-cors',
          }
    });

    if(!response.status){
        throw new Error("Failed to fetch posts");
    }

    return response.data;
}
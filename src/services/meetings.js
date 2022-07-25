import axios from 'axios';
import Config from '@/config';

const { baseUrl } = Config;



const addSession = async ( session ) => {
    const response = await axios.post( `${baseUrl}/api/meetings`, session );
    return response.data;
}

export {
    addSession
};
import { getJobListAction } from '../store/jobsReducer';
import axios from 'axios';

const config = {
    method: 'get',
    headers: {
        'apikey': import.meta.env.VITE_APP_SUPABASE_ANON_KEY
    }
}

export const getJobList = () => {
    return async(dispatch) => {
        const request = await axios.get(import.meta.env.VITE_APP_SUPABASE_REST_API_URL, config);
        const response = await request.data;
        dispatch(getJobListAction(response))
    }
}
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
        const request = await axios.get('https://eorfivltlacpljrejidk.supabase.co/rest/v1/vacancy?select=*', config);
        const response = await request.data;
        dispatch(getJobListAction(response))
    }
}
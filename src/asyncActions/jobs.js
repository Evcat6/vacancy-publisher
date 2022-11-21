import { getJobListAction } from '../store/jobsReducer';

export const getJobList = () => {
    return (dispatch) => {
        fetch('https://eorfivltlacpljrejidk.supabase.co/rest/v1/vacancy?select=*', {
            method: 'GET',
            headers: {
                'apikey': import.meta.env.VITE_APP_SUPABASE_ANON_KEY
            }
        })
        .then(res => res.json())
        .then(json => dispatch(getJobListAction(json)))
    }
}
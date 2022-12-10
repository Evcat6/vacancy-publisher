const defaultState = {
    jobs: []
}

const GET_JOB_LIST = "GET_JOB_LIST";


export const jobsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_JOB_LIST:
            return {...state, jobs: [...action.payload]};
        default:
            return state;
    }
}


export const getJobListAction = (payload) => ({type: GET_JOB_LIST, payload});
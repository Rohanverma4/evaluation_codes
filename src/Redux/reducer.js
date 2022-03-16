import {
    GET_DATA,
    FILTER_DATA
} from './actionTypes'

const initState = {
    data:[],
    filterData:[],
    isLoading:false,
    isError:false
}

export const Reducer = (store = initState, action)=>{
    // add the switch statement for different actions
    switch(action.type){
        case GET_DATA:
            return {
                ...store,
                data: action.payload
            }
        case FILTER_DATA:
            let newData = store.data.filter((item) => item.genre == action.payload);
            return {
                ...store,
                data: newData,
            }
        default: 
            return store
        }
        
    }

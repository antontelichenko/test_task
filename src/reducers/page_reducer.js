export default function (state={}, action) {

    switch(action.type){

        case'GET_PAGES_ALL':
            return{...state,pagesList:action.payload}

        default:
            return state;
    }
}
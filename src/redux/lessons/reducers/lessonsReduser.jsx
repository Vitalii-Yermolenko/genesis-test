export function lessonsReducer ( state = {lessons:{}, isLoading:false, isLoadedLesson:false, currentLesson:{}}, action){
    switch(action.type){
        case "GET_LESSONS_SUCCSES":
            return {...state, lessons: action.payload.lessons, isLoading:false, isLoadedLesson:true}
        case "GET_LESSONS_REQUEST":
            return {...state, isLoading:true}
        case "GET_LESSONS_ERROR":
            return {...state, isLoading:false}
        default:
            return state;
    }

}
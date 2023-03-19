export function coursesReducer ( state = {courses:[], isLoading:false,currentCourse:{},numberCourses:10}, action){
    switch(action.type){
        case "GET_COURSES_SUCCSES":
            return {...state, courses: action.payload.courses.courses, isLoading:false}
        case "GET_COURSES_REQUEST":
            return {...state, isLoading:true}
        case "GET_COURSES_ERROR":
            return {...state, isLoading:false}
        case "CHANGE_CURRENT_COURSE":
            return {...state, currentCourse:action.payload.currentCourse}
        case "CHANGE_NUMBERS_COURSES":
            return {...state, numberCourses:action.payload.numberCourses }
        default:
            return state;
    }

}
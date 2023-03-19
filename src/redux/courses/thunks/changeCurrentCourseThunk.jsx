
export function changeCurrentCourseThunk(courseId){
    return function (dispatch){
        dispatch({type:"CHANGE_CURRENT_COURSE", payload:{currentCourse:courseId}})
    }
}
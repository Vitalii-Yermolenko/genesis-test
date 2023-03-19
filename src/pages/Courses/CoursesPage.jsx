import { CoursesList } from "../../components/CoursesList";
import { useSelector } from "react-redux/es/exports";
import { coursesSelector, numberCoursesSelector } from "../../redux/selectors";
import { useDispatch } from "react-redux";

export function CoursesPage(){
    const courses = useSelector(coursesSelector);
    const numberCourses = useSelector(numberCoursesSelector);
    const dispatch = useDispatch();
    console.log(courses);


    return(
    <div>
        <div>CoursesPage</div>
        <select name="selectCourses" id="selectCourses" value={numberCourses}
        onChange={(e) => {
            dispatch({type: "CHANGE_NUMBERS_COURSES", payload:{numberCourses: e.target.value}})
            }}>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={courses.length}>{courses.length}</option>
        </select>
        <CoursesList 
        courses={courses}
        numberCourses={numberCourses}
        />
    </div>    
    )
}
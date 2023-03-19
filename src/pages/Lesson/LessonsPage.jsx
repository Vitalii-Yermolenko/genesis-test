import { useEffect } from "react"
import { CurrentLesson } from "./components/CurrentLesson"
import { LessonsList } from "./components/LessonsList"
import { getLessonsThunk } from "../../redux/lessons/thunks/getLessonsThunk";
import { useDispatch,useSelector } from "react-redux";
import { isLoadedLessonsSelector, lessonsSelector } from "../../redux/selectors";
import { useParams } from "react-router-dom";
import { isLoadingLessonsSelector } from "../../redux/selectors";

export function LessonsPage(){
    const lessons = useSelector(lessonsSelector);
    const isLoadingLessons = useSelector(isLoadingLessonsSelector);
    const isLoaded = useSelector(isLoadedLessonsSelector)
    const {id} =useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLessonsThunk(id));
      }, [dispatch]);
      console.log(lessons);
    return(
        <div>
            { isLoadingLessons && <div>Loading...</div>}
            {isLoaded && (<div>
                <CurrentLesson/>
                <LessonsList/>
            </div>)}

        </div>

    )
}
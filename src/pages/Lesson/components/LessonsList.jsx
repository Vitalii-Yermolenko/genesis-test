import { useSelector } from "react-redux/es/exports";
import { lessonsSelector } from "../../../redux/selectors";
import { Lesson } from "./Lesson";

export function LessonsList(){
    const lessons = useSelector(lessonsSelector);

    if(!lessons){
        return(
          <div>No lessons</div>
        )
      }

    console.log(lessons);
    const lessonsList = lessons.lessons;
    console.log(lessonsList);

        return(
            <ul>
                {
                    lessonsList.map((lesson) =>{
                        console.log(lesson);
                        return(
                            <Lesson key={lesson.id} lesson={lesson}/>
                        )
                    })
                }
            </ul>
        )
}
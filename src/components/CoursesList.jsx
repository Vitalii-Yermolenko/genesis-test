import { Course } from "./Course";



export function CoursesList({courses,numberCourses }){

    if(!courses){
        return(
          <div>No courses</div>
        )
      }

    console.log(courses);
    const coursesfilter = courses.slice(0, numberCourses);
    return(
        <ul>
            {coursesfilter.map((course) =>{
                        return(<Course 
                            key={course.id}
                            course={course}/>)
                    })
            }
        </ul>
    )
} 
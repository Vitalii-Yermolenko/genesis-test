

export function Lesson({lesson}){

    return(
        <li key={lesson.id}>
            <h2>{lesson.title}</h2>
        </li>
    )
}
import { useDispatch } from "react-redux";
import { changeCurrentCourseThunk } from "../redux/courses/thunks/changeCurrentCourseThunk";
import { Link } from "react-router-dom";
import ReactHLS from 'react-hls-player';
import 'video-react/dist/video-react.css';


export function Course ({course}){
    const {id, previewImageLink, title, lessonsCount, skills, rating ,meta} = course;
    const dispatch = useDispatch()
    console.log(meta.courseVideoPreview.link);
    return (
      <div>
        <img src={previewImageLink + '/cover.webp'} alt={title} />
        <h3>Title:{title}</h3>
        <p>numbers lesson: {lessonsCount} lessons</p>
        <p>{`${meta.skills} skills | ${rating} rating`}</p>
        <ReactHLS url={meta.courseVideoPreview.link}  controls={true} />
        <button 
        onClick={() => {
          dispatch(changeCurrentCourseThunk(id))
        }
        }>
         <Link to={`/lessons/${id}`}>Go to lessons</Link></button>
      </div>
    );
  };

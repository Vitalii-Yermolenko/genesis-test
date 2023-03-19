import {Outlet} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { coursesSelector,isLoadingCourses } from '../../redux/selectors';
import { getCoursesThunk } from '../../redux/courses/thunks/getCoursesThunk';




export function Main(){
  const courses = useSelector(coursesSelector);
  const isLoading = useSelector(isLoadingCourses)
  const dispatch = useDispatch();


    useEffect(() => {
      dispatch(getCoursesThunk());
    }, [dispatch]);
      



    console.log('render',courses);
    return (
        <div>
            <Header/>
            {isLoading && <div>Loading...</div>}
            <Outlet />
            </div>
            )

}

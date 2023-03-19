import { createBrowserRouter } from "react-router-dom";
import { CoursesPage } from "./pages/Courses/CoursesPage";
import { LessonsPage } from "./pages/Lesson/LessonsPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Main } from "./pages/Main/Main";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement:<ErrorPage/>,
    children: [
        {
            path: '/',
            element: <CoursesPage />
        }, {
            path: '/lessons/:id',
            element: <LessonsPage />
        }
    ]
}])
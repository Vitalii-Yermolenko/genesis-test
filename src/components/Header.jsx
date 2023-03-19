import { NavLink } from 'react-router-dom';


export function Header() {
    return (
        <header>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'active-link' : undefined
                    }
                >
                    Courses
                </NavLink>
                <NavLink
                    to="/lessons"
                    className={({ isActive }) =>
                        isActive ? 'active-link' : undefined
                    }
                >
                    Lessons
                </NavLink>
            </nav>
        </header>
    )
}
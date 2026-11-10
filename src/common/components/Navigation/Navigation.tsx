import { NavLink } from "react-router"

import style from './Navigation.module.css'
import { path } from "../Router/Routing"


export const Navigation = () => {


    const setClass = ({ isActive }: { isActive: boolean }) => isActive ? `${style.navButton} ${style.active}` : style.navButton

    return (
        <nav className={style.navigation}>
            <NavLink
                className={setClass}
                to={path.main}>Main</NavLink>
            
            <NavLink
                className={setClass}
                to={path.categoryMovies}>Category Movies</NavLink>
            
            <NavLink
                className={setClass}
                to={path.favorites}>Favorites</NavLink>

            <NavLink
                className={setClass}
                to={path.filteredMovies}>Filtered Movies</NavLink>

            <NavLink
                className={setClass}
                to={path.search}>Search</NavLink>
        </nav>
    )
}

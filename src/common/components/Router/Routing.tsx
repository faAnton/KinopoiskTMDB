import { Navigate, Route, Routes } from "react-router"
import { Main, Search, FilteredMovies, Favorites, CategoryMovies } from "../../../pages"

import { MovieInfo } from "@/pages/MovieInfo/MovieInfo"
import { Error404 } from "@/pages/Error404/Error404"




export const path = {
    main: '/Main',
    search: '/Search',
    filteredMovies: '/FilteredMovies',
    favorites: '/Favorites',
    categoryMovies: '/Movies',
    movie: '/movie'
} as const

export const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={path.main}/>}></Route>
            <Route path={path.main} element={<Main/>}/>
            <Route path={`${path.search}/:search?`} element={<Search/>}/>
            <Route path={path.filteredMovies} element={<FilteredMovies/>}/>
            <Route path={path.favorites} element={<Favorites/>}/>
            <Route path={`${path.categoryMovies}/:category?`} element={<CategoryMovies/>}/>
            <Route path={`${path.movie}/:id`} element={<MovieInfo/>}/>

            <Route path={'*'} element={<Error404/>}/>
        </Routes>
    )
}

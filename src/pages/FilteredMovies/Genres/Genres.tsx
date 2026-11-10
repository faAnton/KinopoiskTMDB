
import { GenreButton } from './GenreButton'
import { useGetGenresQuery } from '@/app/baseApi'
import styles from './Genres.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectGenres, setGenres } from '../Model'

export const Genres = () => {
    const { data: genresResponse } = useGetGenresQuery()
    const selectedGenres = useSelector(selectGenres)
    
    const dispatch = useDispatch()
    
    const changeGenreStatus = (id: number) => {
        dispatch(setGenres({id}))    
    } 
    
    return (
        <div className={styles.genresContainer}>
            {
                genresResponse &&
                genresResponse.genres.map(
                    el => <GenreButton
                        selectedGenres={selectedGenres}
                        callback={changeGenreStatus}
                        genre={el}
                        key={el.id}
                    />
                )
            }
        </div>
    )
}

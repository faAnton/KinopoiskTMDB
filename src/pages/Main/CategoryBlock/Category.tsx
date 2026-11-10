import type { MovieCategory } from '@/app/Types'
import styles from './Category.module.css'
import { useGetMovieFromCategoryQuery } from '@/app/baseApi'
import { MovieCard } from '@/common/components/MovieCard/MovieCard'
import { useNavigate } from 'react-router'
import { path } from '@/common/components'

type Props = {
    endPoint: MovieCategory
    title: string
}

export const Category = ({endPoint, title}: Props) => {

    const {data} = useGetMovieFromCategoryQuery({endPoint})
    const navigate = useNavigate()

    const navigateButton = () => {
        navigate(`${path.categoryMovies}/${endPoint}`)
    }

    return (
        <div className={styles.Category}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <button className={styles.button} onClick={navigateButton}>View more</button>
            </div>
            <div className={styles.content}>
                {data?.results.filter((_el, index) => index < 6).map(movie => {
                    return <MovieCard
                        id={movie.id}
                        posterUrl={movie.poster_path}
                        title={movie.original_title}
                        voteAverage={movie.vote_average}
                        key={movie.id}
                    />
                })}
            </div>
        </div>
    )
}

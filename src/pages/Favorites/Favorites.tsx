import type { FavotiteMovieData } from '@/app/Types'

import { MovieCard } from '@/common/components/MovieCard/MovieCard'
import styles from './Favorites.module.css'
import { useState } from 'react'

const readFavorites = (): FavotiteMovieData[] => {
    return JSON.parse(localStorage.getItem('Favorites') ?? '[]')
}

export const Favorites = () => {

    const [favoriteItems, setFavoriteItems] = useState<FavotiteMovieData[]>(readFavorites)

    const trigger = () => {
        setFavoriteItems(readFavorites())
    }



    return (
        <section className={styles.favoriteSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>Your Favorite Movies</h1>
                <div className={styles.movieBox}>
                    {favoriteItems.map(el => <MovieCard
                        id={el.id}
                        posterUrl={el.posterUrl}
                        title={el.title}
                        voteAverage={el.voteAverage}
                        key={el.id}
                        trigger={trigger}
                    />)}
                    {favoriteItems.length === 0 && <span>You don't have any favorite movies yet</span>}
                </div>
            </div>

        </section>

    )
}

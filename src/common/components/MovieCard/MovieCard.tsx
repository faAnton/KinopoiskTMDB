
import style from './MovieCard.module.css'
import nonFavorite from '@/assets/images/heartIcons/nonFavorite.svg'
import Favorite from '@/assets/images/heartIcons/favorite.svg'
import noPosterImage from '@/assets/images/noPoster.webp'
import type { FavotiteMovieData } from '@/app/Types'
import { useState } from 'react'
import { NavLink } from 'react-router'
import { path } from '../Router/Routing'
import { Rating } from '../Rating/Rating'



type Props = {
    id: number
    title: string
    posterUrl: string
    voteAverage: number
    trigger?: () => void
}

export const MovieCard = ({id, posterUrl ,title, voteAverage, trigger}: Props) => {
    const url = posterUrl ? `https://image.tmdb.org/t/p/w200${posterUrl}` :  noPosterImage
    

    const [isFavorite, setIsFavorite] = useState(() => {
        const stored: FavotiteMovieData[] = JSON.parse(localStorage.getItem('Favorites') ?? '[]')
        return stored.some((el) => el.id === id)
    })
    const setFavorite = () => {

        const stored: FavotiteMovieData[] = JSON.parse(localStorage.getItem('Favorites') ?? '[]')
        const exists = stored.some((el) => el.id === id)

        if (exists) {
            localStorage.setItem(
                'Favorites',
                JSON.stringify(stored.filter((el) => el.id !== id)),
            )
            setIsFavorite(false)
        } else {
            localStorage.setItem(
                'Favorites',
                JSON.stringify([...stored, { id, title, posterUrl, voteAverage }]),
            )
            setIsFavorite(true)
        }

        trigger?.()
    }

    
    return (
        <article>
            <NavLink style={{textDecoration: 'none', color: 'var(--color-text)'}} to={`${path.movie}/${id}`}>
                <div className={style.PosterBlock} style={{ backgroundImage: `url(${url})` }}>
                    <button onClick={setFavorite} className={style.favorite}><img src={isFavorite ? Favorite : nonFavorite}></img></button>
                    <Rating rating={voteAverage} positionAbsolute={true}/>
                </div>
                <p className={style.title}>{title}</p>
            </NavLink>

        </article>
    )
} 
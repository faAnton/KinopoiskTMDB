
import type { Genre } from "@/app/Types"
import styles from './Genres.module.css'
type props = {
    callback: (id: number) => void
    genre: Genre
    selectedGenres: number[]
}

export const GenreButton = ({genre, callback, selectedGenres} : props) => {
    
    const selected = selectedGenres.includes(genre.id)

    const buttonHandler = () => {
        callback(genre.id)
    } 

    return (
        <button className={selected ? styles.genreTag + ' ' + styles.active : styles.genreTag} onClick={buttonHandler}>{genre.name}</button>
    )
}

import noPoster from '@/assets/images/noPoster.webp'
import { posterUrl } from "@/common/utils/posterUrl"
import styles from './InfoBlock.module.css'
import { useGetMovieInfoQuery } from '@/app/baseApi'
import { Rating } from '@/common/components'
import { useNavigate } from 'react-router'

type Props = {
    id: string
}


export const InfoBlock = ({ id }: Props) => {
    const navigate = useNavigate()
    const { data } = useGetMovieInfoQuery({ id })
    if (!data) return <h2>No info from movie</h2>


    const BackHandler = () => {
        navigate(-1)
    }

    return (
        <div className={styles.infoBlock}>
            <div className={styles.imageBox} >
                <img className={styles.image} src={data.poster_path ? posterUrl(data.poster_path, 'w342') : noPoster} alt="poster" />
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <div className={styles.titleWrapper}>
                        <h3 className={styles.movieTitle}>{data.original_title}</h3>
                        <a className={styles.BackButton} onClick={BackHandler}>Back</a>
                    </div>
                    

                    <div className={styles.data}>
                        <span>Release year: {data.release_date.split('-')[0]}</span>
                        <div className={styles.rating}>
                            <Rating positionAbsolute={false} rating={data.vote_average}/>
                        </div>
                        <span>Runtime: {Math.floor(data.runtime / 60)}h {data.runtime % 60}min</span>
                    </div>
                </div>

                <p>{data.overview}</p>
                <div className={styles.genres}>
                    {data.genres.map(el => <span className={styles.genre} key={el.id}>{el.name}</span>)}
                </div>
            </div>

        </div>
    )
}

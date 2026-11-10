import { useGetSimilarQuery } from "@/app/baseApi"
import styles from './Similar.module.css'
import { MovieCard } from "@/common/components/MovieCard/MovieCard"


type Props = {
    id: string
}

export const Similar = ({id}: Props) => {

    const {data} = useGetSimilarQuery({id})

    
    if(!data) return <p>no cast data</p> 

    return (
        <div className={styles.Similar}>
            <h3>Similar Movie</h3>
            <div className={styles.similarWrapper}>
                {data.results.filter((_el,index) => index < 6).map(el => {
                    return <MovieCard
                        id={el.id}
                        posterUrl={el.poster_path}
                        title={el.original_title}
                        voteAverage={el.vote_average}
                        key={el.id}
                    />
                })}
            </div>
        </div>
    )
}

import { useGetMovieFromCategoryQuery } from "@/app/baseApi"
import { MovieCard } from "@/common/components/MovieCard/MovieCard"
import styles from './MovieFromCategory.module.css'
import { Pagination } from "@mui/material"
import { useState } from "react"
import type { MovieCategory } from "@/app/Types"
import { TABS } from "@/common/constants/Tabs"

type Props = {
    endPoint: MovieCategory
}

export const MovieFromCategory = ({endPoint}: Props) => {

    const [page, setPage] = useState(1)
    const {data} = useGetMovieFromCategoryQuery({endPoint, page})
    const ChangePage = (_event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page)
    }

    const title = TABS.find(el => el.id === endPoint)?.label
    
    let totalPages = data?.total_pages
    if(data){
        totalPages = data.total_pages > 500 ? 500 : data.total_pages
    }

    const showPagination = data?.total_pages ? data.total_pages > 1 : false

    return (
        <div className={styles.content}>
            <h2>{title}</h2>
            <div className={styles.contentWrapper}>
                {data?.results.map((movie) => {
                    return <MovieCard
                        id={movie.id}
                        posterUrl={movie.poster_path}
                        title={movie.original_title}
                        voteAverage={movie.vote_average}
                        key={movie.id}
                        
                    />
                })}
            </div>
            {showPagination && <Pagination
                sx={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    "ul>li>button:only-child": {
                        color: 'var(--color-text)'
                    }
                }}
                color={'primary'}
                count={totalPages}
                page={page}
                onChange={ChangePage}
            />}
        </div>
    )
}

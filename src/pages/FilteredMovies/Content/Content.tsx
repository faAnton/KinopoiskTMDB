import {useGetFilteredMoviesQuery } from '@/app/baseApi'
import { MovieCard } from '@/common/components/MovieCard/MovieCard'

import styles from './Content.module.css'
import { shallowEqual, useSelector } from 'react-redux'
import { CombineFilterSelector } from '@/common/utils/CombineFilterSelector'
import { Pagination } from '@mui/material'
import { useEffect, useState } from 'react'



export const Content = () => {
    const { sort, rating, genres } = useSelector(CombineFilterSelector, shallowEqual);
    const [page, setPage] = useState(1)
    let showPagination = true

    const {data} = useGetFilteredMoviesQuery({sort, rating, genres, page})
    
    let totalPages = data && data.total_pages ? data.total_pages : 1
    if (totalPages > 500) totalPages = 500
    else if (totalPages === 1) showPagination = false
    
    useEffect(() => {
        setPage(1)
    }, [sort, rating, genres])

    const ChangePage = (_event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page)
    }

    return (
        <div className={styles.content}>
            {data?.results?.map((el) => <MovieCard 
                                            key={el.id} 
                                            id={el.id} 
                                            posterUrl={el.poster_path} 
                                            title={el.original_title} 
                                            voteAverage={el.vote_average}
                                        />)}
                                        
            <div className={styles.pagination}>
                {showPagination &&  <Pagination
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
        </div>
    )
}

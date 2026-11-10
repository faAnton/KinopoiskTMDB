import { useNavigate, useParams } from "react-router"
import styles from './Search.module.css'
import { Form } from "@/common/components/Form/Form";
import { useLazySearchMovieForNameQuery } from "@/app/baseApi";
import { MovieCard } from "@/common/components/MovieCard/MovieCard";
import Pagination from '@mui/material/Pagination'
import { useEffect, useState } from "react";
import { path } from "@/common/components";



export const Search = () => {
  const {search} = useParams()
  const [page, setPage] = useState(1)
  const [trigger, {data}] = useLazySearchMovieForNameQuery()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (search) trigger({search, page}, true)
  }, [search, trigger, page])

  const ChangePage = (_event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  const formCallback = (search: string) => {
    setPage(1)
    trigger({search, page}, true)
    navigate(`${path.search}/${search}`)
  }

  const showPagination = data?.total_pages ? data.total_pages > 1 : false

  const content = data === undefined ?
                  <p>  Enter a movie title to start searching</p>
                  : data.results[0] ? 
                  data.results.map(el =>  <MovieCard 
                                            key={el.id} 
                                            id={el.id} 
                                            posterUrl={el.poster_path} 
                                            title={el.original_title} 
                                            voteAverage={el.vote_average} 
                                          />)
                  : <p>No matches found</p>
  
  return (
    <section className={styles.SearchSection}>
      <div className={styles.container}>
        <div className={styles.Wrapper}>
          <Form  searchParam={search} trigger={formCallback} />
          
          <div className={styles.ContentWrapper}>
            {content}
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
                                    count={data?.total_pages} 
                                    page={page} 
                                    onChange={ChangePage}
                              />}
        </div>
      </div>

    
    </section>
  )
}

{/* <img src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`}/> */}
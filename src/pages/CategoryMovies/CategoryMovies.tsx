import type { MovieCategory } from "@/app/Types"
import { MovieTabs } from "./MovieTabs/MovieTabs"

import styles from './CategotyMovies.module.css'
import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import { path } from "@/common/components"
import { MovieFromCategory } from "./MovieFromCategory/MovieFromCategory"

export const CategoryMovies = () => {
    const params = useParams<{category: MovieCategory}>()
    const navigate = useNavigate()
    const [category, setCategory] = useState<MovieCategory>(params.category || 'now_playing')

    useEffect(()=> {
        navigate(`${path.categoryMovies}/${category}`)
    }, [category])
    
    
    return (
        <section className={styles.CategorySection}>
            <div className={styles.container}>
                <MovieTabs activeCategory={category} onCategoryChange={setCategory}/> 
                <MovieFromCategory endPoint={category}/>
            </div>
            
        </section>
    )
}

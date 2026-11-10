
import styles from './FiltredMovies.module.css'

import { Sorting } from './Sorting/Sorting'
import { RatingInput } from './Rating/RatingInput'
import { Genres } from './Genres/Genres';
import { Content } from './Content/Content';
import { useDispatch } from 'react-redux';
import { resetState } from './Model';
import { useState } from 'react';



export const FilteredMovies = () => {

    const dispatch = useDispatch()

    const [resetkey, setResetkey] = useState(0) 

    const ResetFilters = () => {
        dispatch(resetState())
        setResetkey((prev) => prev + 1)
    }    

    return (
        <section className={styles.filteredMovies}>
            <div className={styles.container}>
                <div className={styles.filtersColumn}>
                        <h3 className={styles.sidebarTitle}>Filters / Sort</h3>
                        <Sorting/>
                        <RatingInput key={resetkey}/> {/* key костыль для перересовки и сброса при нажатии Reset */}
                        <Genres/>
                        <button onClick={ResetFilters} className={styles.resetBtn}>Resetfilters</button>
                </div>
                <Content/>
            </div>
        </section>
    )
}

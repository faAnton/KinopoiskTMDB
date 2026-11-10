import { type ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectFilter, setFilter } from "../Model"
import type { Filter } from "@/app/Types"
import styles from './Sorting.module.css'


export const Sorting = () => {

    const filter = useSelector(selectFilter)

    const dispatch = useDispatch()

    const changeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFilter({ filter: e.target.value as Filter}))
    }

    return (
        <div>
            <span className={styles.filterLabel}>Sort by</span>
            <select value={filter} onChange={changeFilter} className={styles.filterSelect}>
                <option value="popularity.desc">Popularity ↓</option>
                <option value="popularity.asc">Popularity ↑</option>
                <option value="vote_average.desc">Rating ↓</option>
                <option value="vote_average.asc">Rating ↑</option>
                <option value="primary_release_date.desc">Release Date ↓</option>
                <option value="primary_release_date.asc">Release Date ↑</option>
                <option value="original_title.asc">Title A-Z</option>
                <option value="original_title.desc">Title Z-A</option>
            </select>
        </div>

    )
}

import { useGetCastQuery } from "@/app/baseApi"
import styles from './Cast.module.css'
import { Actor } from "./Actor/Actor"

type Props = {
    id: string
}

export const Cast = ({id}: Props) => {

    const {data} = useGetCastQuery({id})
    
    if(!data) return <p>no cast data</p> 

    return (
        <div className={styles.Cast}>
            <h3>Cast</h3>
            <div className={styles.castWrapper}>
                {data.cast.filter((_el,index) => index < 6).map(el => {
                    return <Actor actor={el} key={el.id}/>
                })}
            </div>
        </div>
    )
}

import { useParams } from "react-router"
import styles from './MovieInfo.module.css'


import { InfoBlock } from './InfoBlock/InfoBlock'
import { Cast } from "./Cast/Cast"
import { Similar } from "./Similar/Similar"

export const MovieInfo = () => {
    const params = useParams<{id: string}>()
    if (!params.id) return <h1>Error</h1>


    return (
        <section className={styles.InfoSection}>
            <div className={styles.container}>
                <InfoBlock id={params.id}/>
                <Cast id={params.id}/>
                <Similar id={params.id}/>
            </div>
        </section>
    )
}

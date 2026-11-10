
import { useGetMovieFromCategoryQuery } from '@/app/baseApi'
import { randomBackDrop } from '@/common/utils/randomBackDrop'
import styles from './WelcomeSection.module.css'

import { Form } from '@/common/components/Form/Form'
import { useNavigate } from 'react-router'
import { path } from '@/common/components'
export const WelcomeSection = () => {
    const {data} = useGetMovieFromCategoryQuery({endPoint: 'popular'})
    const navigate = useNavigate()

    let backDrop
    if (data) {
        backDrop = randomBackDrop(data?.results)
    }
    
    const trigger = (search: string) => {
        navigate(`${path.search}/${search}`)
    }

    return (
        <section className={styles.WelcomeSection} style={{ backgroundImage: `url(${backDrop})` }}>
            <div className={styles.container}>
                <div className={styles.ContentWrapper}>
                <h1 className={styles.Title}>Welcome</h1>
                <p className={styles.Subtitle}>Browse highlighted titles from TMDB</p>
                <Form trigger={trigger}/>
                </div>
            </div>

        </section>
    )
}
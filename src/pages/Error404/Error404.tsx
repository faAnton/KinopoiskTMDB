import { useNavigate } from 'react-router'
import styles from './Error404.module.css'
import { path } from '@/common/components'

export const Error404 = () => {

    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate(path.main)
    }

    return (
        <section className={styles.ErrorSection}>
            <h2>Page Not Found!!!</h2>
            <p>Back to <a onClick={onClickHandler}>Main page</a></p>
        </section>
    )
}

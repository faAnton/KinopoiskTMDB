
import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'
import logo from './../../../assets/images/TMDB_logo.svg'
import { NavLink } from 'react-router'
import { path } from '../Router/Routing'
import globalStyles from '@/app/globalStyles.module.css'
import { changeTheme, selectAppStatus, selectTheme } from '@/app/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { LinearProgress } from '@mui/material'


export const Header = () => {
    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()
    const status = useSelector(selectAppStatus)
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', newTheme)
        dispatch(changeTheme({theme: newTheme}))
    }

    return (
        <header className={styles.header}>
            <div className={globalStyles.container}>
                <NavLink to={path.main} className={styles.logo}><img src={logo} /></NavLink>
                <Navigation />
                <button  className={styles.themeButton} onClick={toggleTheme}>Theme button</button>
            </div>
            {status === 'loading' && <LinearProgress color='primary' sx={{width: '100%'}}/>}
        </header>
    )
}
import { useState, type ChangeEvent } from 'react'
import styles from './Form.module.css'

type Propstype = {

    searchParam?: string
    trigger: (search: string) => void
}

export const Form = ({searchParam, trigger}:Propstype) => {
    const [search, setSearch] = useState(searchParam ? searchParam : '')
    const disabled = search.trim() === ''

    const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        trigger(search)
    }

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <form className={styles.Form}>
            <input
                className={styles.Input}
                type="search"
                placeholder='Search for a movie'
                onChange={inputHandler}
                value={search}
            />
            <Button
                disabled={disabled}
                onClick={buttonHandler}    
            >
                Search
            </Button>
        </form>
    )
}


type ButtonProps = {
    disabled: boolean
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: string
}


const Button = ({disabled, onClick, children}:ButtonProps) => {
    return (
        <button 
            className={disabled ? `${styles.Button} ${styles.Disabled}`: styles.Button} 
            type='submit' onClick={onClick} 
            disabled={disabled}
        >
            {children}
        </button>
    )
}
import React, { useEffect, useState } from 'react'
import styles from './RatingInput.module.css'
import { Slider } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setRating } from '../Model'



export const RatingInput = () => {
    
    const [localRating, setLocalRating] = useState<number[]>([0,10])

    const dispatch = useDispatch()

    useEffect(()=> {
        const timeout = setTimeout(()=> {
            dispatch(setRating({value: localRating}))
        }, 500)

        return () => {
            clearTimeout(timeout)
        }
    }, [localRating, dispatch])

    const changeRating = (_event: Event | React.SyntheticEvent, newValue: number[]) => {
        setLocalRating(newValue)
    }

    return (
        <div className={styles.ratingBox}>
            <div className={styles.ratingHeader}><span>Rating</span> <span>{localRating[0]}/{localRating[1]}</span></div>
            
            <Slider
                step={0.1}
                disableSwap={true}
                value={localRating}
                valueLabelDisplay="auto"
                max={10}
                min={0}
                onChange={changeRating}
                sx={{maxWidth: '200px', marginLeft: '10px'}}
            />
        </div>
    )
}

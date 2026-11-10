import { selectAppError, setAppError } from "@/app/appSlice"
import { Alert, Snackbar } from "@mui/material"
import type { SyntheticEvent } from "react"
import { useDispatch, useSelector } from "react-redux"


export const Error = () => {

    const error = useSelector(selectAppError)

    const dispatch = useDispatch()

    const handleClose = (_: SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return
        }

        dispatch(setAppError({ error: null }))
    }
    
    return (
        <Snackbar
            open={error !== null}
            autoHideDuration={5000}
            message={error}
        >
            <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: "100%" }}>
                {error}
            </Alert>
        </Snackbar>
    )
}

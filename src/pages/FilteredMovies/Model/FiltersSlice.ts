import type { Filter } from "@/app/Types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: 'popularity.desc' as Filter,
    rating: [0, 10] as number[],
    genres: [] as number[],
}


export const FiltersSlice = createSlice({
    initialState,
    name: 'Filters',
    selectors: {
        selectFilter: (state) => state.filter,
        selectRating: (state) => state.rating,
        selectGenres: (state) => state.genres 
    },
    reducers: (create) => ({
        setFilter: create.reducer<{filter: Filter}>((state, acton)=> {
            state.filter = acton.payload.filter
        }),
        setRating: create.reducer<{value: number[]}>((state, action)=> {
            state.rating = action.payload.value
        }),
        setGenres: create.reducer<{id: number}>((state, action)=> {
            const index = state.genres.findIndex(el => el === action.payload.id)
            if (index === -1) state.genres.push(action.payload.id)
            else state.genres.splice(index, 1)
        }),
        resetState: create.reducer(()=> {
            return initialState
        })
    })
}) 


export const {selectFilter, selectRating, selectGenres} = FiltersSlice.selectors
export const {setFilter, setRating, setGenres, resetState} = FiltersSlice.actions
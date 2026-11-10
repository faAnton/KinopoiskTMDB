import type { ThemeMode } from "@/common/types/types";
import { createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import type { RequestStatus } from "./Types";


export const appSlice = createSlice({
    initialState: {
        theme: 'light' as ThemeMode,
        error: null as string | null,
        status: 'idle' as RequestStatus
    },
    name: 'app',
    selectors: {
        selectTheme: (state) => state.theme,
        selectAppError: (state) => state.error,
        selectAppStatus: (state) => state.status
    },
    extraReducers: (builder) => {
        builder
        .addMatcher(isPending, (state) => {
            state.status = 'loading'
        })
        .addMatcher(isFulfilled, (state) => {
            state.status = 'idle'
        })
        .addMatcher(isRejected, (state) => {
            state.status = 'failed'
        })
    },
    reducers: (create) => ({
        changeTheme: create.reducer<{theme: ThemeMode}>((state, action) => {
            state.theme = action.payload.theme
        }),
        setAppError: create.reducer<{error: string | null}>((state, action) => {
            state.error = action.payload.error
        }),
        setAppStatus: create.reducer<{status: RequestStatus}>((state, action)=> {
            state.status = action.payload.status
        }),
    })
})  


export const {selectTheme , selectAppError, selectAppStatus} = appSlice.selectors
export const {changeTheme, setAppError, setAppStatus} = appSlice.actions
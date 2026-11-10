import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { baseApi } from "./baseApi"
import { appSlice } from "./appSlice"
import { FiltersSlice } from "@/pages/FilteredMovies/Model/FiltersSlice"


export const store = configureStore({
    reducer: {
        [appSlice.reducerPath]: appSlice.reducer,
        [FiltersSlice.reducerPath] : FiltersSlice.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store

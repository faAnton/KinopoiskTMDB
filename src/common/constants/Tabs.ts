import type { MovieCategory } from "@/app/Types";

export const TABS: {id: MovieCategory, label: string}[] = [
    { id: 'now_playing',  label: 'Now Playing Movies'},
    { id: 'popular' , label: 'Popular Movies'},
    { id: 'top_rated',  label: 'Top Rated'},
    { id: 'upcoming',  label: 'Upcoming Movies'},
]
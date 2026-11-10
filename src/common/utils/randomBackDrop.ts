import type { Movie } from "@/app/Types";

export const randomBackDrop = (data: Movie[]): string => {
    return `https://image.tmdb.org/t/p/w1280/${data[Math.floor(Math.random() * data.length)].backdrop_path}`    
}
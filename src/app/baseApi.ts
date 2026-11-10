import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ActorType, Filter, Genre, Movie, MovieCategory, MovieInfoResponce, MovieResponse } from "./Types";
import { handleError } from "@/common/utils/handleError";


export const baseApi = createApi({
    reducerPath: 'KinopoiskApi',
    baseQuery: async (args, api, extraOptions) => {

        const result = await fetchBaseQuery({
            baseUrl: import.meta.env.VITE_BASE_URL,
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
            }

        })(args, api, extraOptions)

        handleError(api, result)

        return result
    },
    endpoints: (build) => ({
        // категории
        getMovieFromCategory: build.query<MovieResponse<Movie[]>, {endPoint: MovieCategory, page?: number}>({
            query: ({endPoint, page = 1}) => ({
                url: `/movie/${endPoint}`,
                params: {
                    "language": "en-US",
                    'page': page
                }
            })
        }),
        // страница поиска
        searchMovieForName: build.query<MovieResponse<Movie[]>, {search: string, page: number}>({
            query: ({search, page}) => ({
                url: `/search/movie?query=${search}&page=${page}`,
                params: {
                    "language": "en-US"
                }
            }),
        }),
        // получение всех жанров
        getGenres: build.query<{genres: Genre[] } , void>({
            query: () => 'genre/movie/list'
        }),
        // фильтрация
        getFilteredMovies: build.query<MovieResponse<Movie[]>, {sort: Filter, rating: number[], genres: number[], page: number}>({
            query: ({sort, rating, genres, page}) => ({
                url: '/discover/movie',
                params: {
                    'page': page,
                    'sort_by': sort,
                    'vote_average.gte': rating[0],
                    'vote_average.lte': rating[1],
                    'vote_count.gte': 100,
                    'with_genres': genres.join(','),
                    "language": "en-US"
                }
            })
        }),
        // информация о фильме
        getMovieInfo: build.query<MovieInfoResponce, {id: string}>({
            query: ({id}) => `/movie/${id}?language=en-US` 
        }),
        getCast: build.query<{id: number, cast: ActorType[]}, {id: string}>({
            query: ({id}) => `/movie/${id}/credits`
        }),
        getSimilar: build.query<MovieResponse<Movie[]>, {id: string}>({
            query: ({id}) => `/movie/${id}/similar`
        })
    }),
})


export const {
    useGetMovieFromCategoryQuery,
    useGetMovieInfoQuery,
    useLazySearchMovieForNameQuery, 
    useGetGenresQuery,
    useGetFilteredMoviesQuery,
    useGetCastQuery,
    useGetSimilarQuery,
} = baseApi
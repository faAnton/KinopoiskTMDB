export type Movie = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[]
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type MovieResponse<T> = {
    page: number
    results: T
    total_pages: number,
    total_results: number,
}


export type Genre = {
    id: number
    name: string
}

export type Filter = 
        'popularity.desc' |
        'popularity.asc' |
        'vote_average.desc' |
        'vote_average.asc' |
        'primary_release_date.desc' |
        'primary_release_date.asc' |
        'original_title.asc' | 
        'original_title.desc'

export type FavotiteMovieData = {
    id: number
    title: string
    posterUrl: string
    voteAverage: number
}


export type MovieCategory = 'popular' | 'top_rated' | 'upcoming' | 'now_playing'


type productionCompines = {
      id: number,
      logo_path: string,
      name: string
      origin_country: string
}

type spokenLanguage = {
    english_name: string
    iso_639_1: string
    name: string
}

export type MovieInfoResponce = {
    adult: boolean
    backdrop_path: string,
    belongs_to_collection: {
        id: number
        name: string
        poster_path: string
        backdrop_path: string
    },
    budget: number
    genres: Genre[]
    homepage: string
    id: number
    imdb_id: string
    origin_country: Array<string>
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: productionCompines[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: spokenLanguage[]
    status: string,
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type ActorType = {
    adult: boolean
    gender: 1 | 2
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    character: string,
    credit_id: string
    order: number
}

export type RequestStatus = "idle" | "loading" | "succeeded" | "failed"
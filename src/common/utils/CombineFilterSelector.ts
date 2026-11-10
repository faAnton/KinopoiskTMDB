import type { RootState } from "@/app/store";

export const CombineFilterSelector = (state: RootState) => ({
    sort: state.Filters.filter,
    rating: state.Filters.rating,
    genres: state.Filters.genres,
});
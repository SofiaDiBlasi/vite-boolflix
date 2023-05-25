import { reactive } from 'vue'

export const store = reactive({
    loading: true,
    urlAPI: "https://api.themoviedb.org/3/search/movie?api_key=dd6bb4653418b73ce565043d37464086",
    film: []
});
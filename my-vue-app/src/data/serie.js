import { reactive } from 'vue'

export const serie = reactive({
    loading: true,
    urlAPI: "https://api.themoviedb.org/3/search/tv?api_key=dd6bb4653418b73ce565043d37464086",
    serie: []
});

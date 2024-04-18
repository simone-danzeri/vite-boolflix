import { reactive } from 'vue';
export const store = reactive({
    movies: [],
    tvSeries: [],
    searchedQuery: '',
    flagList: ['it', 'en', 'es', 'ja', 'de'],
});
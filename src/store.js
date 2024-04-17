import { reactive } from 'vue';
export const store = reactive({
    movies: [],
    searchedQuery: '',
    flagList: ['it', 'en', 'es', 'ja'],
});
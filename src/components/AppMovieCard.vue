<script>
import { store } from '../store';
    export default {
        name: 'AppMovieCard',
        props: {
            movieInfo: Object
        },
        data() {
            return {
                store
            }
        },
        methods: {
            getImageUrl(path) {
                return new URL(path, import.meta.url).href
            }
        }
    }
</script>


<template>
        <div class="card-container">
            <div class="img-container">
                <img class="movie-poster" :src="`https://image.tmdb.org/t/p/w342${movieInfo.poster_path}`" alt="">
            </div>
            <div class="card-info">
                <ul>
                    <li>
                        <span class="white">Title: </span>{{ movieInfo.title }}</li>
                    <li><span class="white">Original Title: </span>{{ movieInfo.original_title }}</li>
                    <li>
                        <span class="white">Original language: </span>
                        <img class="flag" v-if="store.flagList.includes(movieInfo.original_language)" :src="this.getImageUrl(`../assets/img/${movieInfo.original_language}.png`)" alt="">
                        <span v-else>{{ movieInfo.original_language }}</span>
                    </li>
                    <li><span class="white">Vote: </span>{{ movieInfo.vote_average }}</li>
                </ul>
            </div>
        </div>
</template>


<style scoped lang="scss">
.card-container{
    width: calc((100% / 5) - 10px);
    margin: 10px 5px;

    .movie-poster{
        width: 100%;
    }

    .card-info{

        .flag{
            width: 30px;
        }
    }
}
</style>
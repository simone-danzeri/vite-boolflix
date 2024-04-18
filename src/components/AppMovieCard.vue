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
                <img v-if="movieInfo.poster_path != null" class="movie-poster" :src="`https://image.tmdb.org/t/p/w342${movieInfo.poster_path}`" alt="">
                <div v-else class="poster-missing">
                    <i class="fa-solid fa-images"></i>
                </div>
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
                    <li>
                        <span class="white">Vote: </span>
                        <span v-if="(Math.round((movieInfo.vote_average) / 2)) > 4">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span v-else-if="(Math.round((movieInfo.vote_average) / 2)) == 4">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span v-else-if="(Math.round((movieInfo.vote_average) / 2)) == 3">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span v-else-if="(Math.round((movieInfo.vote_average) / 2)) == 2">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span v-else-if="(Math.round((movieInfo.vote_average) / 2)) == 1">
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span v-else>
                            {{ Math.round((movieInfo.vote_average) / 2) }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
</template>


<style scoped lang="scss">
.card-container{
    width: calc((100% / 5) - 10px);
    margin: 10px 5px;

    .img-container{
        height: 395px;
        .movie-poster{
            width: 100%;
            height: 100%;
            
        }
    
        .poster-missing{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
    
            i{
            font-size: 100px;
            }
        }

    }
    .card-info{

        .flag{
            width: 30px;
        }
    }
}
</style>
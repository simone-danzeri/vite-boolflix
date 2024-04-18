<script>
import { store } from '../store';
import AppMovieCard from './AppMovieCard.vue';
import AppSerieCard from './AppSerieCard.vue';
    export default {
        name: 'AppMovieContainer',
        components: {
                    AppMovieCard,
                    AppSerieCard
                },
                data() {
                    return {
                        store
                    }
                }
    }
</script>


<template>
    <div class="container">
        <section class="movies-list">
            <h3>MOVIES</h3>
            <div class="movies-card">
                <AppMovieCard v-for="eachMovie in store.movies" :movieInfo="eachMovie"></AppMovieCard>
            </div>
        </section>
        <section class="series-list">
            <h3>TV SERIES</h3>
            <div class="movies-card">
                <AppSerieCard v-for="eachSerie in store.tvSeries" :serieInfo="eachSerie"></AppSerieCard>
            </div>
        </section>
    </div>
</template>


<style scoped lang="scss">
.container{
    
    h3{
        font-size: 20px;
        color: white;
        text-align: center;
    }
    .movies-card{
        display: flex;
        flex-wrap: wrap;
    }
    .movies-list{
        padding: 30px 0;
    }

    .series-list{
        padding: 30px 0;
    }
}
</style>
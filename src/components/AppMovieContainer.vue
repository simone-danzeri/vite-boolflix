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
            <h3>Ecco la lista dei film</h3>
            <div class="movies-card">
                <AppMovieCard v-for="eachMovie in store.movies" :movieInfo="eachMovie"></AppMovieCard>
            </div>
        </section>
        <section class="series-list">
            <h3>Ecco la lista delle serie tv</h3>
            <div class="movies-card">
                <AppSerieCard v-for="eachSerie in store.tvSeries" :serieInfo="eachSerie"></AppSerieCard>
            </div>
        </section>
    </div>
</template>


<style scoped lang="scss">
.container{
    
    .movies-card{
        display: flex;
        flex-wrap: wrap;
    }
    .movies-list{
        background-color: beige;
    }

    .series-list{
        background-color: aqua;
    }
}
</style>
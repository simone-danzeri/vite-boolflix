<script>
import { store } from '../store';
import AppMovieCard from './AppMovieCard.vue';
    export default {
        name: 'AppMovieContainer',
        components: {
                    AppMovieCard
                },
                data() {
                    return {
                        store
                    }
                }
    }
</script>


<template>
    <section class="movies-list">
        <div class="container">
            <div class="movies-card">
                <AppMovieCard v-for="eachMovie in store.movies" :movieInfo="eachMovie"></AppMovieCard>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
.container{
    
    .movies-card{
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
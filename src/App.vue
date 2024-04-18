<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMovieContainer from './components/AppMovieContainer.vue';
  export default {
    components: {
      AppHeader,
      AppMovieContainer
    },
    data() {
      return {
        store
      };
    },
    methods: {
      getMoviesFromApi() {
        const myParams = {
          api_key: '2168a3a30950804fa3dedc7749aa99c7',
          query: store.searchedQuery
        }
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: myParams
        })
        .then((response) => {
          // console.log(response.data.results);
          store.movies = response.data.results;
        });
      },
      getTvSeriesFromApi() {
        const myParams = {
          api_key: '2168a3a30950804fa3dedc7749aa99c7',
          query: store.searchedQuery
        }
        axios.get('https://api.themoviedb.org/3/search/tv' , {
          params: myParams
        })
        .then((response) => {
          // console.log(response.data.results);
          store.tvSeries = response.data.results
        });
      }
    },
  }
</script>


<template>
 <AppHeader @searchPerfomed="getMoviesFromApi(), getTvSeriesFromApi()"></AppHeader>
 <main>
  <AppMovieContainer></AppMovieContainer>
 </main>
</template>


<style lang="scss">
@use './style/generic';
.white{
  color: whitesmoke;
  font-weight: bold;
}

ul li{
  list-style: none;
  padding: 4px 0;
  color: whitesmoke;
}

i{
  color: gold;
}
</style>
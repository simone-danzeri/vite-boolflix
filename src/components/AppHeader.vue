<script>
    import { store } from '../store'
    export default {
        name: 'AppHeader',
        data() {
            return {
                store
            };
        }
    }
</script>
<template>
    <div class="container">
        <section class="header-container">
            <div class="logo">
                <h1>BOOLFLIX</h1>
            </div>
            <div class="search-section">
                <input type="text" placeholder="Cerca i tuoi film e serie tv preferiti" v-model="store.searchedQuery">
                <button @click="$emit('searchPerfomed')">Cerca</button>
            </div>
        </section>
    </div>
</template>


<style scoped lang="scss">
@use '../style/partials/variables' as *;
.header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;

    h1{
        color: $primary-color;
        font-size: 40px;
    }
    
    .search-section{

        input{
            padding: 10px;
            width: 400px;
            border: none;
        }

        button{
            padding: 10px;
            border: none;
            cursor: pointer;
            border: 1px solid $primary-color;
            background-color: antiquewhite;
            
        }
    }
}
</style>
<script>
    export default {
        name: 'AppMovieCard',
        props: {
            movieInfo: Object
        }
    }
</script>


<template>
        <div class="card-container">
            <div class="img-container"></div>
            <div class="card-info">
                <ul>
                    <li>{{ movieInfo.title }}</li>
                    <li>{{ movieInfo.original_title }}</li>
                    <li>Lingua: {{ movieInfo.original_language }}</li>
                    <li>Voto: {{ movieInfo.vote_average }}</li>
                </ul>
            </div>
        </div>
</template>


<style scoped lang="scss">
.card-container{
    width: calc((100% / 5) - 10px);
    margin: 10px 5px;
}
</style>
<script>
    export default {
        name: "Film",
        props: {
            title: String,
            originaltitle: String,
            lang: String,
            rate: Number,
            copertina: String
        },
        data(){
            return{
                votoPieno : 0,
                votoVuoto : 0
            }
        },
        mounted(){
            let votoParsato = parseInt(this.rate / 2);

            this.votoPieno =  votoParsato;
            this.votoVuoto = 5 - votoParsato;
            console.log(this.votoPieno)
            console.log(this.votoVuoto)
        }
    }
</script>

<template>
    <div class="film">
        <img :src="'https://image.tmdb.org/t/p/w154' + copertina" alt="">
        <p>{{ title }}</p>
        <p>{{ originaltitle }}</p>
        <p><span :class="'fi-' + lang" class="fi fis"></span></p>
        <p>
            <span v-for="star in votoPieno" :key="star" class="fa-solid fa-star"></span>
            <span v-for="star in votoVuoto" :key="star" class="fa-regular fa-star"></span>
        </p>
    </div>
</template>

<style>
    .film{
        border: 2px solid black;
        margin: 10px;
        width: 200px;
        text-align: center;
    }
</style>
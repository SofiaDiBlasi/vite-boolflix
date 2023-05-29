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
        <div class="cardImg">
             <img :src="'https://image.tmdb.org/t/p/w342' + copertina" alt="">
        </div>
        <div class="cardInfo">
           <p>{{ title }}</p>
            <p>{{ originaltitle }}</p>
            <p><span :class="'fi-' + lang" class="fi fis"></span></p>
            <p>
                <span v-for="star in votoPieno" :key="star" class="fa-solid fa-star"></span>
                <span v-for="star in votoVuoto" :key="star" class="fa-regular fa-star"></span>
            </p>  
        </div>
    </div>
</template>

<style>
  .film{
        border: 2px solid white;
        text-align: center;
        flex-shrink: 0;
        min-width: 342px;
        margin: 10px;
    }
    .cardInfo{
        display: none;
    }
</style>
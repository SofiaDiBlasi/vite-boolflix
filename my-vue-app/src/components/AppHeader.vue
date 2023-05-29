<script>
    import axios from 'axios';
    import { store } from '../data/store';
    import { serie } from '../data/serie';

    export default {
        name: "SearchFilm",
        data() {
            return{
                input: "",
                store,
                serie
            }
        },
        methods: {
            ricerca() {
                axios.get(this.store.urlAPI + "&query=" + this.input).then(r => {
                    this.store.film = r.data.results;
                    this.store.loading = false;
                }).catch(errore => {
                    console.error("Nessun film trovato", errore);
                    this.store.film = [];
                    this.store.loading = false;
                });

                axios.get(this.serie.urlAPI + "&query=" + this.input).then(r => {
                    console.log(r);
                    this.serie.serie = r.data.results;
                    this.serie.loading = false;
                }).catch(errore => {
                    console.error("Nessun film trovato", errore);
                    this.serie.serie = [];
                    this.serie.loading = false;
                });
            }
        }
    }
</script>

<template>
    <!--header-->
    <header>
        <!--logo booltix-->
        <h1 class="logo">Boolfix</h1>
        <!--search bar-->
        <div>
            <button @click="ricerca()">
            <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input v-model="input" type="text" placeholder="Cerca">
        </div>
    </header>
</template>

<style>
    header{
        display: flex;
        height: 5%;
        background-color: black;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        
    }
    .logo{
        color: red;
    }
</style>
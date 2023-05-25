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
    <div>
        <button @click="ricerca()">
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <input v-model="input" type="text" placeholder="Cerca">
    </div>
</template>
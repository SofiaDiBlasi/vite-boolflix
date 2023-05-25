<script>
    import axios from 'axios';
    import { store } from '../data/store';

    export default {
        name: "SearchFilm",
        data() {
            return{
                input: "",
                store
            }
        },
        methods: {
            ricerca() {
                axios.get(this.store.urlAPI + "&query=" + this.input).then(r => {
                    console.log(r);
                    this.store.film = r.data.results;
                    this.store.loading = false;
                }).catch(errore => {
                    console.error("Nessun film trovato", errore);
                    this.store.film = [];
                    this.store.loading = false;
                });

                console.log(this.store);
                console.log(this.store.film)
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
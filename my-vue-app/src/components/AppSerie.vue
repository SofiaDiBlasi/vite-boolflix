<script>
    export default {
        name: "Serie",
        props: {
            title: String,
            originaltitle: String,
            lang: String,
            rate: Number
        },
        computed: {
            flag(){
                return "fi fi-" + this.lang + " fis"
            }
        }
    }
</script>

<template>
    <div class="film">
        <p>{{ title }}</p>
        <p>{{ originaltitle }}</p>
        <p><span :class="flag"></span></p>
        <p>{{ rate }}</p>
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
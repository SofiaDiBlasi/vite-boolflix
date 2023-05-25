<script>
    export default {
        name: "Film",
        props: {
            title: String,
            originaltitle: String,
            lang: String,
            rate: String
        }
    }
</script>

<template>
    <div class="film">
        <p>{{ title }}</p>
        <p>{{ originaltitle }}</p>
        <p>{{ lang }}</p>
        <p>{{ rate }}</p>
    </div>
</template>

<style>
    .film{
        border: 2px solid black;
        margin: 10px;
        width: 200px;
    }
</style>
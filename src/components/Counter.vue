<template>
<div class="counter">
  <h1>{{msg}}</h1>
  <p v-if="likes > 0">Likes: {{likes}}</p>
  <p v-else>Nobody likes it</p>
  <button v-on:click="like()">Like</button>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Counter",
    props: {
        msg: String
    },
    data() {
        return {
            likes: 0
        }
    },
    methods: {
        like() {
            this.likes++;
        }
    }
})
</script>

<style>
    .counter {
        display: grid;
        width: 500px;
        height: 300px;
        padding: 0px;
        margin: 0px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
        border-style: solid;
        border-color: darkslategray;
        grid-area: 0px 0px 50px 50px;
    }
    .counter button {
        display: grid;
        padding: px;
        margin: 0px;
        width: 100%;
        height: 100%;
        border: 0ch none;
        border-radius: 6px;
        align-content: center;
        background-color: chartreuse;
        grid-row: 10px 20px;
    }

    .counter h1 {
        display: grid;
        grid-area: 0px 0px 50px 50px;
        height: 50px;
    }
</style>
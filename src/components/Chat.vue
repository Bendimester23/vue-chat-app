<template>
<div class="chat">
  <h1>{{title}}</h1>
  <button v-on:click="init()">Sub</button>
  <button v-on:click="deinit()">UnSub</button>
  <input type="text" name="Chat" id="chatIn">
  <button v-on:click="send()">Send</button>
  <ul>
      <li v-for="text in msgs" v-bind:key="text.id">
          <p v-if="text.id > 0">
              {{text.author}}> {{text.msg}}
          </p>
        </li>
  </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import instance from '@/main';

let i = 1;

export default Vue.extend({
    name: "Chat",
    props: {

    },
    data() {
        return {
            title: "Chat",
            msgs: [{}]
        }
    },
    methods: {
        init() {
            instance.sockets.subscribe('msg', (data) => {
                this.msgs.push(data);
                console.log(data);
                i = data.id+1;
            });
        },
        deinit() {
            instance.sockets.unsubscribe('msg');
        },
        send() {
            const obj = document.getElementById('chatIn');
            if (obj == null || obj == undefined) return;
            const text: string = (obj as HTMLInputElement).value;
            const data = {
                author: "Me",
                msg: text,
                id: i
            };
            instance.emit('msg2',data);
            i++;
        }
    }
})
</script>

<style>
    li {
        list-style-type: none;
    }
</style>
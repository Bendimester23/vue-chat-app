<template>
  <div class="chatF">
    <Chat></Chat>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Chat from '@/components/Chat.vue'

export default Vue.extend({
  name: 'Chat-Window',
  components: {
    Chat
  },
});
</script>
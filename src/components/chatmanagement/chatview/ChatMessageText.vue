<script setup>
import { defineProps } from "vue";
const props = defineProps({
  chatMessage: { type: Object, default: () => {} },
});

</script>
<template>
  <div class="chat-message-item relative">
    <div class="message text-left pl-3 pr-3 pt-2 pb-4">
      <span class="text-content ">{{ props.chatMessage.message }}</span>
    </div>
    <div class="absolute time-text-container">
      <span class="time-text">{{ props.chatMessage.getTimePrefix() }}</span>
    </div>
  </div>
</template>
<style scoped>
.chat-message-item {
  background: #FFFFFF;
  border-radius: 40px;
  min-width: 40%;
}
.message .text-content {
  font-size: 0.9rem;

}
.time-text {
  font-size: 0.6rem;
}
.time-text-container {
  bottom: 0;
  right: 1.2rem;
}
</style>
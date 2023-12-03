<script setup>
import {defineProps} from 'vue'
const props = defineProps({chatRoomPrefix: {type: String, default: 'CO'}})
</script>
<template>
  <div class="chat-room-icon relative">
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="64"
        height="64"
        rx="8"
        fill="#9C9B9F"
      />
    </svg>
    <div class="room-prefix absolute left-0 top-0 bottom-0 right-0 flex justify-center items-center">
      {{ props.chatRoomPrefix }}
    </div>
  </div>
</template>
<style scoped>
.room-prefix {
  color: #fff;
  font-weight: 700;
}
</style>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  userNamePrefix: { type: String, default: 'CM' },
});
</script>
<template>
  <div class="chat-person-icon relative">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="20"
        fill="#9C9B9F"
      />
      
    </svg>
    <div class="user-prefix absolute text-sm left-0 top-0 bottom-0 right-0 flex justify-center items-center">
      {{ props.userNamePrefix }}
    </div>
  </div>
</template>
<style scoped>
.user-prefix {
  color: #fff;
  font-weight: 700;
}
</style>
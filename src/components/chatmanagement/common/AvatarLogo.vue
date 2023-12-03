<script setup>
import { defineProps } from "vue";
const props = defineProps({
  userNamePrefix: { type: String, default: 'CM' },
});
</script>
<template>
  <div class="avatar-logo relative">
    <svg
      width="59"
      height="60"
      viewBox="0 0 59 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="29.9659"
        cy="30"
        r="29.0341"
        fill="#9C9B9F"
      />
      
    </svg>
    <div class="user-prefix absolute text-lg left-0 top-0 bottom-0 right-0 flex justify-center items-center">
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
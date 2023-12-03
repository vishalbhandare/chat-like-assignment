<script setup>
import InfoIcon from '../common/InfoIcon'
import { inject} from 'vue'
const selectedChatRoomName = inject('selectedChatRoomName')
</script>
<template>
  <div>
    <div class="flex justify-between p-4 main-header">
      <h1 class="font-semibold text-2xl">
        {{ selectedChatRoomName }}
      </h1>
      <InfoIcon />
    </div>
  </div>
</template>
<style scoped>

</style>
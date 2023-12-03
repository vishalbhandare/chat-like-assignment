<script setup>
import {defineProps} from 'vue'
import ChatRoomIcon from './ChatRoomIcon.vue';
const props = defineProps({chatRoom: {type: Object, default: () => {}}, setSelectedChatRoomName: {type: Function, default: () => {}}})

</script>
<template>
  <div class="p-4">
    <div
      class="chat-room-list-item flex items-center p-2"
      @click="() => props.setSelectedChatRoomName(props.chatRoom.roomName)"
    >
      <div>
        <ChatRoomIcon :chat-room-prefix="props.chatRoom.getChatRoomNamePrefix()" />
      </div>
      <div class="pl-2">
        <span class="font-semibold text-base">{{ props.chatRoom.roomName }}</span>
      </div>
      <div class="flex-1 text-right">
        <span class="font-normal text-sm time-text pr-2"> Created {{ props.chatRoom.getDateDescription() }} </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.time-text {
  color: #9C9B9F;
}
</style>
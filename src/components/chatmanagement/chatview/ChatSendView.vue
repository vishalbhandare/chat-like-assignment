<script setup>
import {ref, inject, defineProps} from 'vue'
import chatService from '../../../lib/remote/chatService.js'
import SendLogo from '../common/SendLogo'
import AttachLogo from '../common/AttachLogo.vue'

const props = defineProps({refreshChatMessage: {type: Function, default: () => {}}})

const messageText = ref('')

const selectedChatRoomName = inject('selectedChatRoomName')
const user = inject('user')
async function sendMessage() {
    if(!messageText.value.length) {
        return
    }
    // console.log('sending message', messageText.value, "-",selectedChatRoomName.value, "-", user.value)
    try {
        let resp = await chatService.sendChatMessage(selectedChatRoomName.value, messageText.value, user.value)
        if(resp) {
            // refresh chat message list
            props.refreshChatMessage(selectedChatRoomName.value)
            messageText.value = ''
        }
    } catch(err) {
        console.log('error', err)
    }
}
</script>
<template>
  <div class="flex items-center px-4">
    <div><AttachLogo /></div>
    <div class="flex-1 px-3">
      <input
        id="write-message"
        v-model="messageText"
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 search-text"
        placeholder="Write a Message..."
        required
        :disabled="selectedChatRoomName.length == 0"
        @keyup.enter="sendMessage" 
      >
    </div>
    <div
      class="send-btn"
      :class="{'disabled': !messageText.length}"
    >
      <SendLogo @click="sendMessage" />
    </div>
  </div>
</template>
<style scoped>
.send-btn.disabled{
    opacity: 0.7;
    pointer-events: none;
}
</style>
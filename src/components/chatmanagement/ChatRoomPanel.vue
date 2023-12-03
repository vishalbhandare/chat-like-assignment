<script setup>
import AddIcon from './chatroom/AddIcon'
import ChatRoomListItem from './chatroom/ChatRoomListItem'
import CreateChatRoom from './chatroom/CreateChatRoom'
import useChatRoomState from './useChatRoomState.js'
import { inject } from 'vue'

const searchText = inject('searchText')
const selectedChatRoomName = inject('selectedChatRoomName')

const {showCreateDialog, chatRoomInfo, toggleDialog, setSelectedChatRoomName, fetchChatRooms} = useChatRoomState()
</script>
<template>
  <div>
    <div class="flex justify-between p-4 ">
      <h1 class="font-semibold text-2xl">
        Chats
      </h1>
      <AddIcon @click="toggleDialog" />
    </div>
    <div class="chatroom-list">
      <ChatRoomListItem
        v-for="chatRoom in chatRoomInfo.data.filter((room) => room.roomName.toLowerCase().startsWith(searchText.toLowerCase()))"
        :key="'chat-room-item' + chatRoom.roomName"
        :class="{'selected': selectedChatRoomName == chatRoom.roomName}"
        :chat-room="chatRoom"
        :set-selected-chat-room-name="setSelectedChatRoomName"
      />
    </div>
    <CreateChatRoom
      v-if="showCreateDialog"
      :toggle-dialog="toggleDialog"
      :reload-chat-rooms="fetchChatRooms"
      :set-selected-chat-room-name="setSelectedChatRoomName"
    />
  </div>
</template>
<style scoped>
.chatroom-list {
    max-height: calc(100vh - (4 * 1rem + 60px + 40px));
    overflow-y: scroll;
}

</style>
<style>
.chatroom-list .selected .chat-room-list-item{
    background: #ECEEF3;
    border-radius: 8px;
}
</style>
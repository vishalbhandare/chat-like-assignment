<script setup>
import ChatViewHeader from "./chatview/ChatViewHeader";
import ChatMessageItem from "./chatview/ChatMessageItem";
import ChatSendView from "./chatview/ChatSendView";
import useChatMessageState from "./useChatMessageState.js";
import { inject, watch, ref } from "vue";
const selectedChatRoomName = inject("selectedChatRoomName");
const { fetchChatMessageList, chatMessageList } = useChatMessageState();
const messageContainer = ref(null)
watch(
  () => selectedChatRoomName.value,
  (newValue) => {
    // console.log('new value', newValue)
    fetchChatMessageList(newValue);
  }
);
watch(
  () => chatMessageList.value.length,
  () => {
    setTimeout(() => {
      messageContainer.value.scroll({
      top: messageContainer.value.scrollHeight,
      behavior: 'smooth'
    });
    }, 100)
    
  }
);
</script>
<template>
  <div class="main-chat-view-parent w-full">
    <div
      class="chat-view-header"
      :class="{'no-room-exit': !selectedChatRoomName.length}"
    >
      <ChatViewHeader />
    </div>
    <div class="chatmessage-list relative">
      <div
        ref="messageContainer"
        class="message-container"
      >
        <ChatMessageItem
          v-for="chatMessage in chatMessageList"
          :key="'chat-item' + chatMessage.index"
          :chat-message="chatMessage"
        />
        <div
          v-if="!chatMessageList.length"
          class="no-message-div absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center"
        >
          <div class="no-message-in-room">
            <span v-if="selectedChatRoomName.length">There is no message in room. Please start conversation.</span>
            <span v-else>Please Create/Select Room to start conversation.</span>
          </div>
        </div>
      </div>
      <ChatSendView
        class="send-view-block absolute left-0 right-0 bottom-0 py-3"
        :refresh-chat-message="fetchChatMessageList"
      />
    </div>
  </div>
</template>
<style scoped>
.chatmessage-list .message-container {
  height: calc(100vh - (4 * 1rem + 60px + 40px));
  overflow-y: scroll;
  padding-bottom: calc(2 * 0.75rem + 40px);
}
.chat-view-header.no-room-exit {
  visibility: hidden;
}
.send-view-block {
  background: #eceef3;
}
.no-message-in-room {
    background: #fff;
    width: 50%;
    border-radius: 10px;
    padding: 12px;
}
</style>

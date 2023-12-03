<script setup>
import { defineProps, inject } from "vue";
import ChatMessageText from './ChatMessageText'
import AvatarChatLogo from '../common/AvatarChatLogo'
const props = defineProps({
  chatMessage: { type: Object, default: () => {} },
});
const user = inject('user')
</script>
<template>
  <div>
    <div
      v-if="props.chatMessage.isLastMessageOfDay"
      class="time-span-row"
    >
      <span>{{ props.chatMessage.getFormattedDateforLastDay() }}</span>
    </div>
    <div
      class="chat-message-item p-4 flex"
      :class="[props.chatMessage.isSelfSent(user) ? 'send-by-self' : 'send-by-other', props.chatMessage.userFirstMessage ? 'first-message' : '']"
    >
      <div class="other-sender">
        <AvatarChatLogo :user-name-prefix="props.chatMessage.getSenderPrefix()" />
      </div>
      <div class="flex-1 px-4 message-container flex">
        <ChatMessageText :chat-message="props.chatMessage" />
      </div>
      <div class="self-sender">
        <AvatarChatLogo :user-name-prefix="props.chatMessage.getSenderPrefix()" />
      </div>
    </div>
  </div>
</template>
<style scoped>

.send-by-self .message-container {
  justify-content: flex-end;
}
.send-by-other .message-container {
  justify-content: flex-start;
}
.self-sender, .other-sender{
  visibility: hidden;
}
.send-by-self.first-message .self-sender{
  visibility: visible;
}
.send-by-other.first-message .other-sender{
  visibility: visible;
}
.time-span-row span {
  color: #a1a7b6;
  font-size: 0.7rem
}
</style>
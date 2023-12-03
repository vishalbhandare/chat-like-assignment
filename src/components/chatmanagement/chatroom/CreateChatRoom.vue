<script setup>
import { defineProps, ref, inject, onMounted, onUnmounted, watch } from "vue";
import chatService from '../../../lib/remote/chatService.js'
const props = defineProps({
  toggleDialog: { type: Function, default: () => {} },
  reloadChatRooms: { type: Function, default: () => {} },
  setSelectedChatRoomName: { type: Function, default: () => {} },
});
const user = inject('user')
const chatRoomName = ref("");
const chatRoomSaveError = ref('')
async function saveChatRoom() {

    if(chatRoomName.value) {
        try {
            const allExistingChatRooms = await chatService.getAllChatRooms()
            const isRoomExist = allExistingChatRooms.find((chatRoom) => chatRoom.roomName.toLowerCase() === chatRoomName.value.toLowerCase())
            if(isRoomExist) {
              chatRoomSaveError.value = 'Room already exist'
              return false
            }
            let resp = await chatService.addChatRoom(chatRoomName.value, user.value)
            if(resp) {
                    props.setSelectedChatRoomName(chatRoomName.value)
                    props.reloadChatRooms()
                    props.toggleDialog()
            }
        } catch(err) {
            chatRoomSaveError.value = 'Please try again something is wrong...'
            console.log(err, 'error')
        }
    }
}

function onEscapeKeyPress(e) {
  if(e.key === "Escape") {
    props.toggleDialog()
  }
}
watch(() => chatRoomName.value, () => {
  chatRoomSaveError.value = ''
})
onMounted(() => {
  document.addEventListener("keydown",onEscapeKeyPress, true);
})

onUnmounted(() => {
  document.removeEventListener("keydown", onEscapeKeyPress, true);
})
</script>
<template>
  <div
    class="relative flex items-center justify-center dialog-container"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity w-full h-full dialog-overlay"
    />
    <div class="mx-auto bg-white shadow w-5/12 login-form">
      <form @submit="(event) => event.preventDefault()">
        <div
          class="login-header text-center flex justify-center items-center relative"
        >
          <h1 class="text-2xl">
            Create a Chat
          </h1>
          <img
            src="../../../assets/cross_icon.svg" 
            class="absolute right-0"
            @click="props.toggleDialog"
          >
        </div>
        <div class="chat-room-create-info mt-4">
          <span class="text-sm">
            Chats are where your circle communicates. They’re best when
            organized around a topic — #Writing, for example.
          </span>
        </div>
        <div class="mt-4">
          <label
            for="email"
            class="block text-sm font-medium text-slate-700 text-center"
          >Name</label>
          <div class="mt-1 mb-2">
            <input
              id="chatRoomName"
              v-model="chatRoomName"
              type="text"
              name="chatRoomName"
              class="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
              value=""
              placeholder="# e.g. writing "
            >
          </div>
          <p
            class="mt-1  peer-invalid:visible text-pink-600 text-sm text-left"
            :class="{'invisible': !chatRoomSaveError}"
          >
            {{ chatRoomSaveError }}
          </p>
        </div>
        <div class="mt-6 text-right">
          <button
            class="login-btn bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white w-full"
            :disabled="!chatRoomName"
            @click="saveChatRoom"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.login-header h1 {
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
}
.login-btn {
  background: #6c69ff;
}
.login-form {
  padding: 1.5rem;
  z-index: 1000;
  border-radius: 8px;
}

.dialog-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.dialog-overlay {
  z-index: 1;
}
.err-message {
  color: #dd2c1c;
  font-size: 13px;
}
</style>

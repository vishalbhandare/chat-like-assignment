<script setup>
import { inject } from "vue";
import { useRouter } from 'vue-router'
import CompanyLogoSmall from '../common/CompanyLogoSmall'
import ChatSearch from './common/ChatSearch'
import AvatarLogo from './common/AvatarLogo.vue'
import userService from '../../lib/remote/userService.js'
const router = useRouter()
const user = inject('user')
function logoutUser() {
  userService.logoutUser()
  router.push('/login')
}
function clearAllRoom() {
  localStorage.setItem('chatRoomList', [])
  window.location.reload()
}
</script>
<template>
  <div class="flex p-4 items-center"> 
    <div class="logo-icon">
      <CompanyLogoSmall />
    </div>
    <div class="flex-1 pl-5">
      <ChatSearch />
    </div>
    <div class="relative">
      <div class="flex items-center">
        <div
          class="logout-btn"
          @click="logoutUser"
        >
          Logout
        </div>
        <div
          class="clear-btn pl-4 pr-4"
          @click="clearAllRoom"
        >
          Clear Rooms
        </div>
        <div>
          <AvatarLogo :user-name-prefix="user?.getNamePrefix()" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.logout-btn, .clear-btn {
  cursor: pointer;
}
</style>
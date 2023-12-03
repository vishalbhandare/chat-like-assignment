<script setup>
  import SearchPanel from './chatmanagement/SearchPanel.vue'
  import ChatRoomPanel from './chatmanagement/ChatRoomPanel.vue'
  import ChatViewPanel from './chatmanagement/ChatViewPanel.vue'
  import ApplicationLayout from '../ApplicationLayout.vue'
  import userService from '../lib/remote/userService.js'
  import { ref, provide, onMounted } from 'vue'
  
  const searchText = ref('')
  const userObj = ref(null)
  const selectedChatRoomName = ref('')

  provide('searchText', searchText)
  provide('user', userObj)
  provide('selectedChatRoomName', selectedChatRoomName)

  onMounted(async () => {
    const user = await userService.getUserDetails()
    userObj.value = user
  })
</script>
<template>
  <ApplicationLayout>
    <template #header>
      <SearchPanel />
    </template>
    <template #left>
      <ChatRoomPanel />
    </template>
    <template #right>
      <ChatViewPanel />
    </template>
  </ApplicationLayout>
</template>
<style scoped>
.search-bar {
  position: sticky;
    top: 0;
    background: #FFFFFF;
    box-shadow: 2px 4px 36px 0px #0A05FF29;
}
</style>
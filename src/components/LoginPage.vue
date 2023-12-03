<script setup>
import AppIntroduction  from './login/AppIntroduction.vue';
import LoginDialog from './login/LoginDialog'
import ApplicationLayout from '../ApplicationLayout.vue'
</script>
<template>
  <ApplicationLayout>
    <template #left>
      <AppIntroduction />
    </template>
    <template #right>
      <LoginDialog />
    </template>
  </ApplicationLayout>
</template>
<style scoped>
.logo {
  display: flex;
  justify-content: center;
}
.main-title h1{
  font-family: 'Work Sans', sans-serif;
}
.detail p {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
}
</style>
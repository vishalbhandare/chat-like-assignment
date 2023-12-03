<script setup>
import CompanyLogoLarge from '../common/CompanyLogoLarge'
</script>
<template>
  <div class="login-page p-4 flex flex-col justify-center items-center">
    <div class="logo">
      <CompanyLogoLarge />
    </div>
    <div class="main-title  mt-14">
      <h1 class="text-4xl font-sans font-bold">
        Let's Connect
      </h1>
    </div>
    <div class="sub-title mt-7">
      <h2 class="text-2xl font-semibold">
        One click away from your Circle!!
      </h2>
    </div>
    <div class="detail mt-6">
      <p class="text-base font-normal">
        Nisi nunc et mi egestas nibh eget. Est cras suspendisse id erat elit felis, eu. Sollicitudin ullamcorper massa dictum enim id malesuada orci nibh pulvinar. Sed at feugiat arcu lorem et porttitor. Scelerisque amet orci congue dignissim.
      </p>
    </div>
    <LoginDialog />
  </div>
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
.login-page {
  min-height: 100vh;
}
</style>
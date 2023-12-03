<script setup>
    import {ref, computed} from 'vue'
    import { useRouter } from 'vue-router'
    import userService from '../../lib/remote/userService.js'
    const inputEmail = ref('')
    const router = useRouter()
    function saveUser() {
        if(userService.autheticateUser(inputEmail.value)) {
            router.push('/chats')
        } else {
            inputEmail.value = ''
        }
    }
    const isEmailValid = computed(() => {
        return inputEmail.value && userService.validateUserDetails(inputEmail.value)
    })
</script>
<template>
  <div
    class="relative flex items-center justify-center login-dialog-container w-full"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!-- <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity w-full h-full" /> -->
    <div class="mx-auto bg-white shadow  login-form w-10/12">
      <form @submit="(event) => event.preventDefault()">
        <div class=" login-header text-left">
          <h1 class="text-2xl">
            Log in
          </h1>
        </div>
        <div class="mt-9">
          <label
            for="email"
            class="block text-sm font-medium text-slate-700 text-left"
          >Email</label>
          <div class="mt-1">
            <input
              id="email"
              v-model="inputEmail"
              type="email"
              name="email"
              class="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
              placeholder="you@example.com"
            >
            <p
              class="mt-1  peer-invalid:visible text-pink-600 text-sm text-left"
              :class="{'invisible': !inputEmail || isEmailValid}"
            >
              Please provide a valid email address. 
            </p>
          </div>
        </div>
        <div class="mt-6 text-right">
          <button
            class="login-btn bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white w-full disabled:opacity-75"
            :disabled="!isEmailValid"
            @click="saveUser"
          >
            Log in
          </button>
        </div>
        <hr class="mt-9 text-right">
      </form>
    </div>
  </div>
</template>
<style scoped>
.login-header h1 {
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
}
.login-btn {
    background: #6C69FF;
}
.login-form {
    padding: 3rem;
    z-index: 1000;
    border-radius: 8px;
}

.err-message {
    color: #DD2C1C;
    font-size: 13px;
}
</style>
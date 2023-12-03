<script setup>
import { inject } from 'vue'
const searchText = inject('searchText')
function resetSearch() {
  searchText.value = ''
}
</script>
<template>
  <form class="flex items-center">   
    <label
      for="voice-search"
      class="sr-only"
    >Search</label>
    <div class="relative w-2/5">
      <input
        id="voice-search"
        v-model="searchText"
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 search-text"
        placeholder="Search"
        required
      >
      <button
        type="button"
        class="absolute inset-y-0 end-0 flex items-center pe-3 right-0"
      >
        <img
          v-if="searchText.length <= 0"
          src="../../../assets/search_icon.svg"
        ><img
          v-else
          src="../../../assets/cross_icon.svg"
          @click="resetSearch"
        >
      </button>
    </div>
  </form>
</template>
<style scoped>
.search-text {
  background-color: #ECEEF3;
}
</style>
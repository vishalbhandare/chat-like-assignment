
<template>
  <div>
    <div class="search-bar">
      <slot name="header" />
    </div>
    <div class="flex">
      <div class="w-5/12">
        <slot name="left" />
      </div>
      <div class="flex-1 right-side flex items-center justify-center">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.search-bar {
  position: sticky;
    top: 0;
    background: #FFFFFF;
    box-shadow: 2px 4px 36px 0px #0A05FF29;
}
.right-side {
  background: #ECEEF3;
}
</style>
<template>
  <div>
    <UiSplit v-show="colorMode.value === 'light'" />
    <UiSplitDark v-show="colorMode.value === 'dark'" />
  </div>
</template>

<script setup>
const colorMode = useColorMode()
</script>

<style scoped></style>

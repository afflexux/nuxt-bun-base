<template>
  <div>
    <UiSplit v-show="colorMode.value === 'light'" />
    <UiSplitDark v-show="colorMode.value === 'dark'" />
    <UiFeature v-show="colorMode.value === 'light'" />
    <UiFeatureDark v-show="colorMode.value === 'dark'" />
    <UiFooter v-show="colorMode.value === 'light'" />
    <UiFooterDark v-show="colorMode.value === 'dark'" />
  </div>
</template>

<script setup>
const colorMode = useColorMode()
</script>

<style scoped></style>

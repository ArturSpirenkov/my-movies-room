<script setup>
import { onBeforeMount } from 'vue';
import { useThemeStore } from './stores';

onBeforeMount(() => {
  const themeStore = useThemeStore();
  themeStore.loadTheme();
});
</script>
<template>
  <router-view />
</template>

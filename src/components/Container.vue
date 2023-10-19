<script setup>
import { ref } from 'vue';
import { SizePadding, MaxWidth } from '../constants';

const props = defineProps({
  px: {
    type: String,
    required: false,
    default: SizePadding.md,
  },
  maxW: {
    type: String,
    required: false,
    default: MaxWidth.md,
  },
  pt: {
    type: String,
    required: false,
  },
  pb: {
    type: String,
    required: false,
  },
});

const paddingX = ref(`${props.px}px`);
const maxWidth = ref(`${props.maxW}px`);

const ptop = ref(`${props.pt}px`);
const ptob = ref(`${props.pb}px`);
</script>
<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 100%;
  margin: auto;
  padding-left: v-bind(paddingX);
  padding-right: v-bind(paddingX);
  padding-top: v-bind(ptop);
  padding-bottom: v-bind(ptob);
  max-width: v-bind(maxWidth);
}
</style>

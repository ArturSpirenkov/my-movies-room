<script setup>
import Container from '../components/Container.vue';
import { MaxWidth } from '../constants';
import Header from '../components/Header.vue';
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <Container :max-w="MaxWidth.lg" class="container">
        <Header />
      </Container>
    </div>
    <main class="main">
      <slot></slot>
    </main>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container {
  margin: auto;
  position: relative;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.main {
  flex: 1 1 auto;
  margin-top: 80px;
}
.footer {
}
</style>

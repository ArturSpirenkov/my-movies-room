<script setup>
import { useAuthStore } from '../stores';
import Loader from '../components/Loader.vue';
import { ref } from 'vue';
import router from '../router';

const authStore = useAuthStore();

const email = ref();
const password = ref();

async function signin() {
  const formData = {
    email: email.value,
    password: password.value,
  };
  await authStore.auth(formData);
  router.push('./home');
}
</script>

<template>
  <div class="signup-page">
    <h1 class="signup-page__title">Signin</h1>
    <div class="error-message" v-if="authStore.error">
      {{ authStore.error }}
    </div>
    <form class="signup-form" @submit.prevent="signin">
      <div class="signup-form__field">
        <label for="email" class="signup-form__label">Email</label>
        <input
          id="email"
          class="signup-form__input"
          type="email"
          placeholder="Введите ваш email"
          v-model="email"
        />
      </div>
      <div class="signup-form__field">
        <label for="password" class="signup-form__label">Пароль</label>
        <input
          id="password"
          class="signup-form__input"
          type="password"
          placeholder="Введите пароль"
          v-model="password"
        />
      </div>
      <Loader v-if="authStore.loader" />
      <button class="button button_primary signup-form__button" v-else>
        Signin
      </button>
      <span
        >Are you not registered yet?
        <router-link to="/signup">Sign up</router-link></span
      >
    </form>
  </div>
</template>

<style scoped lang="scss">
.signup-page {
  text-align: center;
  padding: 20px;
}

.signup-page__title {
  font-size: 24px;
  margin-bottom: 20px;
}

.signup-form {
  max-width: 400px;
  margin: 0 auto;
}

.signup-form__field {
  margin-bottom: 20px;

  .signup-form__label {
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
  }

  .signup-form__input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}

.button {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &.button_primary {
    background-color: #007bff;
    color: #fff;
  }
}

.signup-form__button {
  margin-top: 20px;
}
</style>

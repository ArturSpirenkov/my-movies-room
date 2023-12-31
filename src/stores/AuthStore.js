import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE;

export const useAuthStore = defineStore('authStore', () => {
  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refreshToken: '',
    expiresIn: '',
  });
  const error = ref('');
  const loader = ref(false);

  const auth = async (payload, type) => {
    const stringUrl = type === 'signup' ? 'signUp' : 'signInWithPassword';
    error.value = '';
    loader.value = true;
    console.log(apiKey);
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`,
        {
          ...payload,
          returnSecureToken: true,
        }
      );
      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn,
      };
    } catch (err) {
      switch (err.response.data.error.message) {
        case 'EMAIL_EXISTS':
          error.value = 'Email exists';
          break;
        case 'OPERATION_NOT_ALLOWED':
          error.value = 'Operation not allowed';
          break;
        case 'EMAIL_NOT_FOUND':
          error.value = 'Email not found';
          break;
        case 'INVALID_PASSWORD':
          error.value = 'Invalid password';
          break;
        case 'MISSING_PASSWORD':
          error.value = 'MISSING_PASSWORD';
          break;
        default:
          error.value = 'Error';
          break;
      }
      throw new Error(error.value);
    } finally {
      loader.value = false;
    }
  };
  return { auth, userInfo, error, loader };
});

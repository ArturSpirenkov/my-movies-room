import { defineStore } from 'pinia';

export const useThemeStore = defineStore('themeStore', {
  state: () => ({
    theme: 'light',
    checkedTheme: false,
  }),
  actions: {
    toggleTheme() {
      this.theme = this.checkedTheme ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('theme', this.theme);
    },
    loadTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        if (savedTheme === 'dark') {
          this.checkedTheme = true;
        }
        this.theme = savedTheme;
        document.documentElement.setAttribute('data-theme', this.theme);
        return;
      }
      document.documentElement.setAttribute('data-theme', 'light');
    },
  },
});

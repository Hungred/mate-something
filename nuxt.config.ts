export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'zh-TW',
    locales: [
      { code: 'zh-TW', name: '繁體中文', file: 'zh.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    langDir: 'language/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      fallbackLocale: 'zh-TW',
    },
  },
});

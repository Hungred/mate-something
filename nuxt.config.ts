export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/i18n', '@pinia/nuxt'],
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
  runtimeConfig: {
    geminiApiKey: '',
  },
  ui: {
    theme: {
      colors: ['pink', 'gray'],
    },
  },
  components: [
    { path: '~/components/common', pathPrefix: false }, // 取消 common namespace
    { path: '~/components', pathPrefix: true }, // 其他資料夾維持預設
  ],
  nitro: {
    // 強制指定使用 node-server，這樣 Prisma 就不會亂跑
    preset: 'node-server',
  },
});

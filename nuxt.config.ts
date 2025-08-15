// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/seo'
  ],

  supabase: {
    redirectOptions: {
      login: '/auth/login',
      callback: '/auth/callback',
      exclude: ['/']
    }
  },

  runtimeConfig: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    public: {
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY
    }
  }
})
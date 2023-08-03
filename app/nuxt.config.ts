// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      meta: [{ name: "description", content: "Zahid Akhyar Portofolio Site~" }],
      script: [
        {
          hid: "NewRelic",
          src: "/newrelic.js",
          defer: true,
          type: "text/javascript",
        },
      ],
    },
  },

  ssr: false,

  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  colorMode: {
    preference: "system",
    dataValue: "theme",
    classSuffix: "",
  },
});

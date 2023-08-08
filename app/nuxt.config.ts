// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Zahid Akhyar",
      meta: [{ name: "description", content: "Zahid Akhyar Portofolio Site~" }],
      script: [
        {
          hid: "NewRelic",
          src: "./newrelic.js",
          defer: true,
          type: "text/javascript",
        },
      ],
    },
    // baseURL: "/zahidakhyar/",
  },

  css: ["~/assets/css/main.css"],

  ssr: false,

  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
  ],

  colorMode: {
    preference: "system",
    dataValue: "theme",
    classSuffix: "",
  },
});

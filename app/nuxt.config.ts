// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      title: "Zahid Akhyar",
      meta: [{ name: "description", content: "Zahid Akhyar Portofolio Site~" }],
      script: [
        {
          hid: "NewRelic",
          src:
            process.env.NODE_ENV === "production"
              ? "/zahidakhyar/newrelic.js"
              : "/newrelic.js",
          defer: true,
          type: "text/javascript",
        },
      ],
    },
    baseURL: process.env.NODE_ENV === "production" ? "/zahidakhyar/" : "",
  },

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],

  imports: {
    dirs: ["stores"],
  },

  colorMode: {
    preference: "system",
    dataValue: "theme",
    classSuffix: "",
  },

  runtimeConfig: {
    public: {
      env: process.env.NODE_ENV,
    },
  },
});

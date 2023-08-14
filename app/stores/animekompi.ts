// Description: Animekompi Web Scraper using fetch and cheerio

import * as cheerio from "cheerio";
import { Anime } from "types";

export const useAnimekompiStore = defineStore("animekompi", {
  state: () => ({
    url: "/animekompi",
  }),

  actions: {
    async init() {
      return await $fetch(this.url);
    },

    async getMain() {
      const html = await this.init();

      const $ = cheerio.load(html as string);

      let anime: Anime[] = [];

      $(".bs").each((i, el) => {
        // Remove h2 from .tt
        $(el).find(".tt h2").remove();

        const title = $(el).find(".tt").text().trim();
        const episode = $(el).find(".epx").text().trim();
        const link = $(el).find(".tip").attr("href");
        const image = $(el).find("img").attr("data-lazy-src");

        anime.push({
          title,
          episode,
          link: link ? link?.split("/")[3] : "",
          image: image ? image : "",
        });
      });

      return anime;
    },
  },
});

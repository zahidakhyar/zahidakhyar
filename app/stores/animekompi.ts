// Description: Animekompi Web Scraper using fetch and cheerio

import * as cheerio from "cheerio";
import { Anime } from "types";

export const useAnimekompiStore = defineStore("animekompi", {
  state: () => ({
    url: "/animekompi",
  }),

  actions: {
    async init(url?: string): Promise<string> {
      const response = await fetch(url ? `${this.url}/${url}` : this.url);

      return await response.text();
    },

    async getMain(): Promise<Anime[]> {
      const html = await this.init();

      const $ = cheerio.load(html as string);

      let anime: Anime[] = [];

      $(".bs").each((i, el) => {
        $(el).find(".tt h2").remove();

        const link = $(el).find(".tip").attr("href");
        const image = $(el).find("img").attr("data-lazy-src");

        anime.push({
          title: $(el).find(".tt").text().trim(),
          episode: $(el).find(".epx").text().trim(),
          link: link ? link?.split("/")[3] : "",
          image: image ? image : "",
        });
      });

      return anime;
    },

    async getDetail(url: string): Promise<Anime> {
      const html = await this.init(url);

      const $ = cheerio.load(html as string);

      return {
        title: $(".infox h2").text().trim(),
        episode: "",
        link: url,
        image: "",
        description: $(".desc").text().trim(),
      };
    },
  },
});

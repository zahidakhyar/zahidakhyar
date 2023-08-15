// Description: Animekompi Web Scraper using fetch and cheerio

import * as cheerio from "cheerio";
import { Anime, DownloadLink } from "types";

export const useAnimekompiStore = defineStore("animekompi", {
  state: () => ({
    url: "/animekompi",
  }),

  actions: {
    async init(url?: string) {
      return await fetch(url ? `${this.url}/${url}` : this.url);
    },

    async getMain(page?: number): Promise<[Anime[], boolean]> {
      const html = await this.init(page ? `page/${page}` : "");

      const $ = cheerio.load(await html.text());

      let anime: Anime[] = [];

      $(".excstf .bs").each((i, el) => {
        $(el).find(".tt h2").remove();

        const url = $(el).find(".tip").attr("href");
        const image = $(el).find("img").attr("data-lazy-src");

        anime.push({
          title: $(el).find(".tt").text().trim(),
          episode: $(el).find(".epx").text().trim(),
          url: url ? url?.split("/")[3] : "",
          image: image ? image : "",
          is_hot: $(el).find(".hotbadge").length > 0,
          translation: $(el).find(".sb").text().trim(),
          type: $(el).find(".typez").text().trim(),
        });
      });

      const hasNextPage = $(".r").length > 0;

      return [anime, hasNextPage];
    },

    async getDetail(url: string): Promise<Anime> {
      const html = await this.init(url);

      const $ = cheerio.load(await html.text());

      const image = $(".thumb img").attr("data-lazy-src");

      let downloadLinks: Anime["downloadLinks"] = [];

      $(".soraddlx").each((i, el) => {
        const type = $(el).find(".sorattlx h3").text().trim();

        $(el)
          .find(".soraurlx")
          .each((i, el) => {
            const resolution = $(el).find("strong").text().trim();

            let downloadLink: DownloadLink = {
              type: type,
              resolution: resolution,
              urls: [],
            };

            $(el)
              .find("a")
              .each((i, el) => {
                const url = $(el).attr("href");
                const name = $(el).text().trim();

                downloadLink.urls.push({
                  url: url ? url : "",
                  name: name ? name : "",
                });
              });

            downloadLinks!.push(downloadLink);
          });
      });

      return {
        title: $(".entry-title").text().trim(),
        episode: "",
        url: url,
        image: image ? image : "",
        description: $(".desc").text().trim(),
        downloadLinks,
      };
    },
  },
});

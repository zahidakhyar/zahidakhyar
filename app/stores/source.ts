export const useSourceStore = defineStore("source", {
  state: () => ({
    // Sources using type Source
    sources: [
      {
        name: "Animekompi",
        url: "https://animekompi.cam",
        image: "/animekompi.png",
      },
      {
        name: "Otakudesu",
        url: "https://otakudesu.lol",
        image: "/otakudesu.png",
      },
    ],
  }),
});

export type Anime = {
  title: string;
  episode: string;
  url: string;
  image: string;
  description?: string;
  downloadLinks?: DownloadLink[];
};

export type DownloadLink = {
  type: string;
  resolution: string;
  urls: URL[];
};

export type URL = {
  url: string;
  name: string;
};

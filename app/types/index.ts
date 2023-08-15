export type Anime = {
  title: string;
  episode?: string;
  url: string;
  image: string;
  description?: string;
  is_hot?: boolean;
  type?: string;
  translation?: string;
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

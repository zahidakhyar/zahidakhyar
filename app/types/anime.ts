export type Anime = {
  title: string;
  episode?: string;
  url: string;
  image: string;
  description?: string;
  is_hot?: boolean;
  type?: string;
  translation?: string;
  genres?: Genres[];
  downloadLinks?: DownloadLink[];
  source: string;
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

export type Genres = {
  name: string;
  url: string;
}

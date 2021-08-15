export interface IWikiList {
  key: number;
  pageId: string;
}

export interface IWikiResponse {
  thumbnailUrl: string;
  originalImageUrl: string;
  description: string;
  pageId: string;
  desktopUrl: string;
  mobileUrl: string;
  title: string;
  extract: string;
  lang: string;
  timestamp: string;
}

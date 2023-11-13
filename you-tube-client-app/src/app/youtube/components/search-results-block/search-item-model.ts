export interface SearchItemSnippetThumbnail {
  url: string,
  width: number,
  height: number,
}

interface SearchItemSnippetThumbnails {
  default: SearchItemSnippetThumbnail,
  medium: SearchItemSnippetThumbnail,
  high: SearchItemSnippetThumbnail,
  standard: SearchItemSnippetThumbnail,
  maxres: SearchItemSnippetThumbnail,
}

interface SearchItemSnippetLocalized {
  title: string,
  description: string,
}

interface SearchItemSnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: SearchItemSnippetThumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: SearchItemSnippetLocalized,
  defaultAudioLanguage: string,
  defaultLanguage?: string,
}

export interface SearchItemStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string,
}

export interface SearchItem {
  kind: string,
  etag: string,
  id: { videoId: string },
  snippet: SearchItemSnippet,
  statistics: SearchItemStatistics,
}

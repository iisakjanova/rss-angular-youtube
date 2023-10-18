interface SearchItemSnippetThumbnail {
  url: string,
  width: string,
  height: string,
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
}

interface SearchItemStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string,
}

export interface SearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: SearchItemSnippet,
  statistics: SearchItemStatistics,
}

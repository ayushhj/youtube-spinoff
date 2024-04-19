const API_KEY = process.env.REACT_APP_SECRET_KEY
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;

export const YOUTUBE_SEARH_API = "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=[VIDEO_ID]&maxResults=500&key=" + API_KEY;

export const YOUTUBE_MOVIE_DETAIL_API = "https://youtube.googleapis.com/youtube/v3/videos?part=id%2Cstatistics%2Csnippet&id=[VIDEO_ID]&key=" + API_KEY;

export const YOUTUBE_MOVIE_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=40&key=" + API_KEY;
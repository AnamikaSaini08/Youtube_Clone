export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const OFFSET_LIVE_CHAT = 30;
const CORSANYWHARE_URL = "https://api.allorigins.win/get?url=";

export const YOUTUBE_API_KEY = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SUGGESTION_API =  CORSANYWHARE_URL +'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const SUGGESTED_VIDEOS =  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=";

export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const YOUTUBE_VIDEO_BY_ID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";
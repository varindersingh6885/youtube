const API_KEY_YOUTUBE = "AIzaSyCCPavCDSbDZDrIjAbqirNvzYLWvlxONKw";

export const GET_MOST_POPULAR_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY_YOUTUBE}`;

export const GET_SEARCH_SUGGESTIONS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${API_KEY_YOUTUBE}&q=`;

import {VideosSearchDataJSON} from "../../services/api/models/VideosListJSON";

export const videosDataStub: VideosSearchDataJSON = JSON.parse(`{
  "kind": "youtube#searchListResponse",
  "etag": "uWmOwmWswA2rhRtX8m7DlUAQwXs",
  "nextPageToken": "CAUQAA",
  "regionCode": "MA",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "pGkf-oSnOFf22635-jxbjhtY97M",
      "id": {
        "kind": "youtube#video",
        "videoId": "sBws8MSXN7A"
      },
      "snippet": {
        "publishedAt": "2019-01-03T21:20:36Z",
        "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
        "title": "React JS Crash Course",
        "description": "In this crash course you will learn what React JS is and the fundamentals such as components, state, props, JSX, events, etc. Modern React Front To Back - 13.5 ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/sBws8MSXN7A/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/sBws8MSXN7A/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/sBws8MSXN7A/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Traversy Media",
        "liveBroadcastContent": "none",
        "publishTime": "2019-01-03T21:20:36Z"
      }
    }
  ]
}`);

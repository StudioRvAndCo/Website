import { createStore } from 'vuex'
import statistics from './data/statistics.json'
import content_creator from './data/content_creators.json'
import playlists from './data/playlists.json'
import posts from './data/posts.json'
import banners from './data/banners.json'

export default createStore({
  state: {
    YT_Stats: statistics,
    YT_Content_Creators: content_creator,
    YT_Playlists: playlists,
    Insta_Posts: posts,
    Banners: banners
  },
})
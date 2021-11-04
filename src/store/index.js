import { createStore } from 'vuex'
import statistics from '../assets/data/statistics.json'
import content_creator from '../assets/data/content_creators.json'
import playlists from '../assets/data/playlists.json'
import posts from '../assets/data/posts.json'
import members from '../assets/data/members.json'

export default createStore({
  state: {
    YT_Stats: statistics,
    YT_Content_Creators: content_creator,
    YT_Playlists: playlists,
    Insta_Posts: posts,
    Members: members
  },
})
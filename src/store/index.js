import { createStore } from 'vuex'
import statistics from './data/statistics.json'
import playlists from './data/playlists.json'

export default createStore({
  state: {
    YT_Stats: statistics['items'][0]['statistics'],
    YT_Content_Creators: '',
    YT_Playlists: playlists['items'],
    YT_Playlists_Stats: '',
  },
})

// https://stackoverflow.com/questions/36856232/write-add-data-in-json-file-using-node-js
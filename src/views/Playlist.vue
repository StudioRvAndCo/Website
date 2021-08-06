<template>
  <div id="playlist">
    <img id="banner" :src="YT_Playlists[id]['thumbnail']['maxres']['url']" :alt="$t(YT_Playlists[id]['infos']['title'])">
    <h1>{{ $t(YT_Playlists[id]['infos']['title']) }}</h1>
    <p>{{ $t(YT_Playlists[id]['infos']['description']) }}</p>

    <article>
      <section v-for="i in YT_Playlists[id]['videos'].length" :key="i">
        <img :src="YT_Playlists[id]['videos'][i-1]['thumbnails']['medium']['url']" :alt="$t(YT_Playlists[id]['infos']['title']+'_'+(i-1))">
        <h2>{{ $t(YT_Playlists[id]['infos']['title']+'_'+(i-1)) }}</h2>
        <p>{{ $t(YT_Playlists[id]['infos']['description']+'_'+(i-1)) }}</p>
        <p>{{ YT_Playlists[id]['videos'][i-1]['statistics'] }}</p>
      </section>
    </article>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    goto(url) {
      window.location = url;
    }
  },
  computed: {
    ...mapState(['YT_Playlists'])
  }
}
</script>

<style scoped>
#banner {
  width: 100%;
  height: 650px;
  margin-top: -70px;
  object-fit: cover;
}
</style>
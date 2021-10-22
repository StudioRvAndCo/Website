<template>
  <!-- Episodes -->
  <article v-for="i in YT_Playlists[id]['videos'].length" :key="i">
    <a :href="'https://www.youtube.com/watch?v=' + YT_Playlists[id]['videos'][i-1]['id']">
      <img :src="YT_Playlists[id]['videos'][i-1]['thumbnails']" :alt="YT_Playlists[id]['videos'][i-1]['title'][locale]">
      <div class="infos">
        <h2>{{ YT_Playlists[id]['videos'][i-1]['title'][locale] }}</h2>
        <p>{{ YT_Playlists[id]['videos'][i-1]['description'][locale] }}</p>
      </div>
    </a>
  </article>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'episodes',
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState(['YT_Playlists']),
    locale() {
      if (this.$i18n.locale === 'fr-FR') return 1;
      return 0;
    }
  }
}
</script>

<style scoped>
article {
  padding: 30px 0;
}

article:nth-child(even) {
  background-color: var(--container);
}

article a {
  margin: 0 auto;
  padding: 0 12px;
  max-width: 1120px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px 30px;
  text-decoration: none !important;
}

article a img {
  width: auto;
  height: 140px;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);
}

.infos {
  width: 100%;
}

.infos h2 {
  margin: 0;
  font-size: 1.3em;
  font-weight: 600;
  color: var(--primary-text);
}

.infos p {
  margin: 0;
  font-size: 1em;
  font-weight: 300;
  color: var(--secondary-text);
}

@media screen and (max-width: 700px) {
  article a {
    flex-flow: column nowrap;
  }

  .infos h2 {
    margin: 0 0 8px;
  }
}
</style>

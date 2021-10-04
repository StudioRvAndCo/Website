<template>
  <article v-for="i in YT_Playlists[id]['videos'].length" :key="i">
    <a :href="'https://youtube.com/'">
      <img :src="YT_Playlists[id]['videos'][i-1]['thumbnails']['medium']['url']" :alt="$t(YT_Playlists[id]['infos']['title']+'_'+(i-1))">
      <div class="infos">
        <div class="title">
          <h2>{{ $t(YT_Playlists[id]['infos']['title']+'_'+(i-1)) }}</h2>
          <div class="stats">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.85 488.85">
                <path fill="#CDCDCD" d="M244.43 98.72c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"/>
              </svg>
              <p>{{ YT_Playlists[id]['videos'][i-1]['statistics']['viewCount'] }}</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#CDCDCD" d="M53.33 224A53.4 53.4 0 000 277.33V448a53.4 53.4 0 0053.33 53.33h64a52.95 52.95 0 0032-10.8V224h-96zM512 304a47.3 47.3 0 00-13.89-33.58 52.97 52.97 0 0013.66-40.72c-2.5-27.12-26.93-48.37-55.64-48.37H324.35c6.53-19.82 16.98-56.15 16.98-85.33 0-46.27-39.31-85.33-64-85.33-22.16 0-38 12.48-38.67 12.99a10.72 10.72 0 00-4 8.34v72.34l-61.43 133.1-2.56 1.3V467.4C188.03 475.6 210 480 224 480h195.82c23.23 0 43.56-15.66 48.34-37.27a47.99 47.99 0 00-3.86-32.04 47.78 47.78 0 0021.35-64.02A47.76 47.76 0 00512 304z"/>
              </svg>
              <p>{{ YT_Playlists[id]['videos'][i-1]['statistics']['likeCount'] }}</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="transform: rotate(180deg)">
                <path fill="#CDCDCD" d="M53.33 224A53.4 53.4 0 000 277.33V448a53.4 53.4 0 0053.33 53.33h64a52.95 52.95 0 0032-10.8V224h-96zM512 304a47.3 47.3 0 00-13.89-33.58 52.97 52.97 0 0013.66-40.72c-2.5-27.12-26.93-48.37-55.64-48.37H324.35c6.53-19.82 16.98-56.15 16.98-85.33 0-46.27-39.31-85.33-64-85.33-22.16 0-38 12.48-38.67 12.99a10.72 10.72 0 00-4 8.34v72.34l-61.43 133.1-2.56 1.3V467.4C188.03 475.6 210 480 224 480h195.82c23.23 0 43.56-15.66 48.34-37.27a47.99 47.99 0 00-3.86-32.04 47.78 47.78 0 0021.35-64.02A47.76 47.76 0 00512 304z"/>
              </svg>
              <p>{{ YT_Playlists[id]['videos'][i-1]['statistics']['dislikeCount'] }}</p>
            </div>
          </div>
        </div>
        <p>{{ $t(YT_Playlists[id]['infos']['description']+'_'+(i-1)) }}</p>
      </div>
    </a>
  </article>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Productions',
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState(['YT_Playlists'])
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
  gap: 30px;
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

.title {
  margin: 0 0 12px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
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

.stats {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0 26px;
}

.stats div {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 0 6px;
}

.stats div svg {
  width: auto;
  height: 22px;
  color: var(--secondary-text);
}

.stats div p {
  margin: 0;
  padding: 0;
  color: var(--secondary-text);
  font-size: .9em;
}

.infos p {
  margin: 0;
  font-size: 1em;
  font-weight: 300;
  color: var(--secondary-text);
}
</style>

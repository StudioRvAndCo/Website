<template>
  <article id="presentation">
    <!-- Background image -->
    <img id="banner" :src="require('../../assets/banners/' + YT_Playlists[id]['playlistId'] + '.jpg')" :alt="$t(YT_Playlists[id]['title'][locale])">
    <!-- Title, description and link to playlist -->
    <section>
      <div>
        <img id="poster" :src="YT_Playlists[id]['thumbnail']" :alt="$t(YT_Playlists[id]['title'][locale])">
        <div>
          <h1>{{ YT_Playlists[id]['title'][locale] }}</h1>
          <p>{{ YT_Playlists[id]['description'][locale] }}</p>
          <a class="btn primary-btn" :href="'https://www.youtube.com/playlist?list=' + YT_Playlists[id]['playlistId']">{{ $t('watch_yt') }}</a>
        </div>
      </div>
    </section>
    <!-- Separator -->
    <svg id="separator" xmlns="http://www.w3.org/2000/svg" width="1920" height="78.802" viewBox="0 0 1920 78.802">
      <path d="M0,1033l45.7-7.7c45.6-7.6,137-23,228.5-23.1,91.5-.2,183.1,14.8,274.6,26.1,91.5,11.4,182.9,19,274.2,26.4,91.3,7.3,182.7,14.3,274,11.1,91.3-3.1,182.7-16.5,274.2-20.3s183.1,1.8,274.6.7c91.5-1.2,182.9-9.2,228.5-13.2l45.7-4v52H0Z" transform="translate(0 -1002.198)" fill="#393939" />
    </svg>
  </article>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'presentation',
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
  position: relative;
  margin-bottom: -4px;
}

#banner {
  width: 100%;
  min-height: 350px;
  max-height: 460px;
  margin-top: -64px;
  object-fit: cover;
  opacity: .2;
}

#poster {
  width: auto;
  height: 180px;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 8px;
}

section {
  width: 100%;
  position: absolute;
  top: calc(50% - 20px);
  transform: translateY(-50%);
}

section > div:first-child {
  margin: 0 auto;
  padding: 0 12px;
  max-width: 1120px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px 30px;
}

section div:first-child > div {
  display: flex;
  flex-flow: column nowrap;
}

h1 {
  margin: 0 0 8px;
  font-size: 1.6em;
  font-weight: 700;
  text-shadow: 0 0 .8em var(--background-color), 0 0 0.2em var(--background-color);
}

p {
  margin: 0 0 30px;
  text-align: justify;
  line-height: 1.3;
  font-weight: 300;
  color: var(--secondary-text);
  text-shadow: 0 0 .8em var(--background-color), 0 0 0.2em var(--background-color);
}

svg {
  position: absolute;
  bottom: 0;
  left: 0;
}

@media screen and (max-width: 900px) {
  #banner {
    min-height: 570px;
  }

  section {
    top: calc(50% - 10px);
  }

  section > div:first-child {
    flex-flow: column nowrap;
  }

  section div:first-child > div {
    align-items: center;
  }

  a {
    text-align: center;
  }
}

@media screen and (max-width: 400px) {
  a {
    width: 100%;
  }
}
</style>

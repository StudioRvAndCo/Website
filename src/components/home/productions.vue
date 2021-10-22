<template>
  <!-- Ttile -->
  <h2 class="super_title" id="productions">{{ $t('main_productions') }}</h2>
  <!-- Main playlists -->
  <div id="main_productions">
    <div v-for="i in YT_Playlists.length" :key="i">
      <article class="playlist" v-if="YT_Playlists[i-1]['frontPage']">
        <div class="container">
          <img :src="YT_Playlists[i-1]['thumbnail']" :alt="YT_Playlists[i-1]['title'][locale]">
          <section>
            <div class="infos">
              <h3>{{ YT_Playlists[i-1]['title'][locale] }}</h3>
              <p>{{ YT_Playlists[i-1]['description'][locale] }}</p>
            </div>
            <router-link :to="{name: 'playlist', params: {id: (i-1)}}" class="btn">{{ $t('watch') }}</router-link>
          </section>
        </div>
      </article>
    </div>
  </div>
  <!-- Other playlists -->
  <div id="other_productions" v-if="frontPageCount > 0 && YT_Playlists.length !== frontPageCount">
    <div>
      <h3>{{ $t('other_productions') }}</h3>
      <div v-for="i in YT_Playlists.length" :key="i">
        <article v-if="!YT_Playlists[i-1]['frontPage']">
          <router-link :to="{name: 'playlist', params: {id: (i-1)}}">
            <img :src="YT_Playlists[i-1]['thumbnail']" :alt="YT_Playlists[i-1]['title'][locale]">
            <section>
              <h3>{{ YT_Playlists[i-1]['title'][locale] }}</h3>
            </section>
          </router-link>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'productions',
  computed: {
    ...mapState(['YT_Playlists']),
    locale() {
      if (this.$i18n.locale === 'fr-FR') return 1;
      return 0;
    },
    frontPageCount() {
      let i = 0;
      for (const playlist in this.YT_Playlists) {
        if (this.YT_Playlists[playlist]['frontPage']) i++;
      }
      return i;
    }
  },
  mounted() {
    let playlist = document.getElementsByClassName('playlist');
    for (let i = 0; i < playlist.length; i++) {
      if (i % 2 !== 0) {
        playlist[i].style.backgroundColor = 'var(--container)';
        playlist[i].firstChild.style.flexDirection = 'row-reverse';
      }
    }
    if (this.frontPageCount !== this.YT_Playlists.length) {
      if (this.frontPageCount % 2 !== 0) {
        document.getElementById('other_productions').style.backgroundColor = "var(--container)";
        this.$emit('even');
      }
    } else if (this.frontPageCount % 2 === 0) {
      this.$emit('even');
    }
  }
}
</script>

<style scoped>
.super_title {
  padding: 20px 12px 0;
}

#main_productions article {
  padding: 30px 0;
}

#main_productions .container {
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0 30px;
  padding: 0 12px;
  max-width: 1120px;
}

#main_productions .container img {
  width: auto;
  height: 180px;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);
}

#main_productions .container section {
  height: 180px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}

#main_productions .container .infos h3 {
  margin: -4px 0 8px;
  font-size: 1.3em;
  font-weight: 700;
}

#main_productions .container .infos p {
  margin: 0 0 12px;
  text-align: justify;
  line-height: 1.3;
  font-weight: 300;
  color: var(--secondary-text);
}

#other_productions > div:first-child {
  margin: 0 auto;
  max-width: 1120px;
  padding: 20px 12px;
}

#other_productions h3 {
  margin: 0 0 20px;
  font-size: 1.5em;
  text-transform: uppercase;
}

#other_productions article {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  gap: 26px 40px;
}

#other_productions article a {
  display: inline-block;
  position: relative;
  transition: transform .15s;
}

#other_productions article a:hover {
  transform: scale(1.04);
  transition: transform .15s;
}

#other_productions article img {
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);
}

#other_productions section {
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 100%;
  background-color: rgba(57, 57, 57, 0.8);
  border-radius: 0 0 7px 7px;
}

#other_productions article h3 {
  margin: 0;
  padding: 10px 12px;
  color: var(--primary-text);
  text-decoration: none;
  text-align: center;
  font-size: 1em;
  text-transform: none;
}

@media screen and (max-width: 880px) {
  #main_productions .container {
    flex-direction: column !important;
    gap: 26px 0;
    text-align: center;
  }

  #main_productions .container section {
    height: auto;
    align-items: center;
    gap: 20px 0;
  }

  #main_productions .container .infos p {
    margin: 0;
  }
}

@media screen and (max-width: 480px) {
  #main_productions .container section a {
    width: 100%;
  }
}
</style>

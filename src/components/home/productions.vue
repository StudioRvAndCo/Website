<template>
  <h2 class="super_title">{{ $t('main_productions') }}</h2>

  <article v-for="i in YT_Playlists.length" :key="i" :class="i % 2 === 0 ? ' container_alt' : ''">
    <div class="container" :class="i % 2 === 0 ? ' container_alt' : ''">
      <img :src="YT_Playlists[i-1]['thumbnail']['medium']['url']" :alt="$t(YT_Playlists[i-1]['infos']['title'])">
      <section>
        <div class="infos">
          <h3>{{ $t(YT_Playlists[i-1]['infos']['title']) }}</h3>
          <p>{{ $t(YT_Playlists[i-1]['infos']['description']) }}</p>
        </div>
        <router-link :to="{name: 'playlist', params: {id: (i-1)}}" class="btn">{{ $t('watch') }}</router-link>
      </section>
    </div>
  </article>

<!--  <div id="other_productions">
    <h3>Autres productions</h3>
    <article>
      <router-link v-for="i in YT_Playlists.length" :key="i" :to="{name: 'playlist', params: {id: (i-1)}}">
        <img :src="YT_Playlists[i-1]['thumbnail']['medium']['url']" :alt="$t(YT_Playlists[i-1]['infos']['title'])">
        <div>
          <h3>{{ $t(YT_Playlists[i-1]['infos']['title']) }}</h3>
        </div>
      </router-link>
    </article>
  </div>-->
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'productions',
  created() {
    if (this.$store.state.YT_Playlists.length % 2 === 0) {
      this.$emit('even')
    }
  },
  computed: {
    ...mapState(['YT_Playlists'])
  }
}
</script>

<style scoped>
.super_title {
  padding: 20px 0 0;
}

article {
  padding: 30px 0;
}

article:nth-child(odd) {
  background-color: var(--container);
}

.container {
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0 30px;
  padding: 0 12px;
  max-width: 1120px;
}

.container_alt {
  flex-direction: row-reverse;
}

.container img {
  width: auto;
  height: 180px;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);
}

.container section {
  height: 180px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}

.container .infos h3 {
  margin: -4px 0 8px;
  font-size: 1.3em;
  font-weight: 700;
}

.container .infos p {
  margin: 0 0 12px;
  text-align: justify;
  line-height: 1.3;
  font-weight: 300;
  color: var(--secondary-text);
}

#other_productions {
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 12px;
}

#other_productions h3 {
  font-size: 1.5em;
  text-transform: uppercase;
}

#other_productions article {
  padding: 0 0 20px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  gap: 20px 40px;
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

#other_productions div {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(57, 57, 57, 0.8);
  border-radius: 0 0 8px 8px;
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
  .container {
    flex-direction: column;
    gap: 26px 0;
    text-align: center;
  }

  .container section {
    height: auto;
    gap: 20px 0;
  }

  .container .infos p {
    margin: 0;
  }
}

@media screen and (max-width: 480px) {
  .container section a {
    width: 100%;
  }
}
</style>

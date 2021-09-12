<template>

  <h2 class="super_title">{{ $t('main_productions') }}</h2>

  <article v-for="i in YT_Playlists.length" :key="i">
    <div class="container" :class="i % 2 === 0 ? ' container_alt' : ''">
      <img :src="YT_Playlists[i-1]['thumbnail']['medium']['url']" :alt="$t(YT_Playlists[i-1]['infos']['title'])">
      <section>
        <div class="infos">
          <h3>{{ $t(YT_Playlists[i-1]['infos']['title']) }}</h3>
          <p>{{ $t(YT_Playlists[i-1]['infos']['description']) }}</p>
        </div>
        <div class="flex-btn">
          <router-link :to="{name: 'playlist', params: {id: (i-1)}}" class="btn">{{ $t('watch') }}</router-link>
          <div class="stats">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.13 55.13">
                <path fill="#CDCDCD" d="M4.17 47h46.79c2.3 0 4.17-1.86 4.17-4.16V12.28c0-2.3-1.87-4.16-4.17-4.16H4.16A4.17 4.17 0 000 12.29v30.55c0 2.3 1.87 4.17 4.17 4.17zm26.6-2.92h-6.42v-3.96h6.42v3.96zm15.3-32.94h6.41v3.96h-6.42v-3.96zm-.2 28.98h6.42v3.96h-6.42v-3.96zM35.3 11.14h6.42v3.96H35.3v-3.96zm-.19 28.98h6.42v3.96h-6.42v-3.96zM24.54 11.14h6.42v3.96h-6.42v-3.96zm-1.8 9.58l9.64 4.82c2.24 1.12 2.24 2.93 0 4.05l-9.64 4.82c-2.23 1.12-4.05 0-4.05-2.5v-8.69c0-2.5 1.81-3.62 4.05-2.5zm-8.96-9.58h6.42v3.96h-6.42v-3.96zm-.19 28.98h6.42v3.96H13.6v-3.96zM3.02 11.14h6.42v3.96H3.02v-3.96zm-.19 28.98h6.42v3.96H2.83v-3.96z"/>
              </svg>
              <p>{{ YT_Playlists[i-1]['videos'].length }}</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.85 488.85">
                <path fill="#CDCDCD" d="M244.43 98.72c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"/>
              </svg>
              <p>{{ YT_Playlists[i-1]['statistics']['viewCount'] }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </article>

  <div id="other_productions">
    <h3>Autres productions</h3>
    <article>
      <router-link v-for="i in YT_Playlists.length" :key="i" :to="{name: 'playlist', params: {id: (i-1)}}">
        <img :src="YT_Playlists[i-1]['thumbnail']['medium']['url']" :alt="$t(YT_Playlists[i-1]['infos']['title'])">
        <div>
          <h3>{{ $t(YT_Playlists[i-1]['infos']['title']) }}</h3>
        </div>
      </router-link>
    </article>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Productions',
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

.flex-btn {
  display: flex;
  flex-flow: row wrap;
  gap: 0 30px;
}

.stats {
  height: 40px;
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

#other_productions {
  margin: 0 auto;
  max-width: 1120px;
}

#other_productions h3 {
  font-size: 1.5em;
  text-transform: uppercase;
  padding: 0 12px;
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

  .flex-btn {
    justify-content: center;
  }
}

@media screen and (max-width: 480px) {
  .flex-btn {
    flex-direction: column;
    gap: 4px 0;
  }

  .flex-btn a, .flex-btn .stats {
    width: 100%;
  }

  .stats {
    justify-content: space-evenly;
  }
}
</style>

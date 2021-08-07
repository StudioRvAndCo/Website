<template>
  <div id="productions">
    <h2>{{ $t('main_productions') }}</h2>

    <article v-for="i in YT_Playlists.length" :key="i">
      <div class="container" :class="i % 2 === 0 ? ' c_reverse' : ''">
        <img :src="YT_Playlists[i-1]['thumbnail']['medium']['url']" :alt="$t(YT_Playlists[i-1]['infos']['title'])">
        <section>
          <div class="infos">
            <h3>{{ $t(YT_Playlists[i-1]['infos']['title']) }}</h3>
            <p>{{ $t(YT_Playlists[i-1]['infos']['description']) }}</p>
          </div>
          <div class="flex-btn">
            <router-link :to="{name: 'playlist', params: {id: (i-1)}}" class="btn primary-btn"><p>{{ $t('watch') }}</p></router-link>
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
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="#CDCDCD" d="M53.33 224A53.4 53.4 0 000 277.33V448a53.4 53.4 0 0053.33 53.33h64a52.95 52.95 0 0032-10.8V224h-96zM512 304a47.3 47.3 0 00-13.89-33.58 52.97 52.97 0 0013.66-40.72c-2.5-27.12-26.93-48.37-55.64-48.37H324.35c6.53-19.82 16.98-56.15 16.98-85.33 0-46.27-39.31-85.33-64-85.33-22.16 0-38 12.48-38.67 12.99a10.72 10.72 0 00-4 8.34v72.34l-61.43 133.1-2.56 1.3V467.4C188.03 475.6 210 480 224 480h195.82c23.23 0 43.56-15.66 48.34-37.27a47.99 47.99 0 00-3.86-32.04 47.78 47.78 0 0021.35-64.02A47.76 47.76 0 00512 304z"/>
                </svg>
                <p>{{ YT_Playlists[i-1]['statistics']['likeCount'] }}</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="transform: rotate(180deg)">
                  <path fill="#CDCDCD" d="M53.33 224A53.4 53.4 0 000 277.33V448a53.4 53.4 0 0053.33 53.33h64a52.95 52.95 0 0032-10.8V224h-96zM512 304a47.3 47.3 0 00-13.89-33.58 52.97 52.97 0 0013.66-40.72c-2.5-27.12-26.93-48.37-55.64-48.37H324.35c6.53-19.82 16.98-56.15 16.98-85.33 0-46.27-39.31-85.33-64-85.33-22.16 0-38 12.48-38.67 12.99a10.72 10.72 0 00-4 8.34v72.34l-61.43 133.1-2.56 1.3V467.4C188.03 475.6 210 480 224 480h195.82c23.23 0 43.56-15.66 48.34-37.27a47.99 47.99 0 00-3.86-32.04 47.78 47.78 0 0021.35-64.02A47.76 47.76 0 00512 304z"/>
                </svg>
                <p>{{ YT_Playlists[i-1]['statistics']['dislikeCount'] }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>

    <!-- TODO: Add crawlable productions -->
    <!-- <div id="other_productions"></div> -->

  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Productions',
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
/* TODO: Add statistics for playlists */

#productions {
  padding: 50px 0 0;
}

h2::before {
  border-top: .0625em solid;
  content: "";
  flex: 1;
  margin: 0 16px 0 .1em;
}

h2 {
  margin: 0 12vw 30px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 2em;
  text-transform: uppercase;
}

h2::after {
  border-top: .0625em solid;
  content: "";
  flex: 1;
  margin: 0 .1em 0 16px;
}

article {
  padding: 40px 0;
}

article:first-of-type {
  padding-top: 0;
}

article:nth-child(odd) {
  background-color: var(--container);
}

.container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0 40px;
  padding: 0 15vw;
}

.c_reverse {
  flex-flow: row-reverse nowrap;
}

.container img {
  width: auto;
  height: 200px;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);
}

.container section {
  display: flex;
  flex-flow: column nowrap;
}

.container .infos h3 {
  margin: 0 0 12px;
  font-size: 1.6em;
  font-weight: bold;
}

.container .infos p {
  margin: 0 0 12px;
  font-size: 1.2em;
  text-align: justify;
  line-height: 1.36;
  color: var(--secondary-text);
}

.flex-btn {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 0 40px;
}

.stats {
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0 16px;
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
  height: 16px;
}

.stats div p {
  margin: 0;
  padding: 0;
  color: var(--secondary-text);
}

@media screen and (max-width: 1320px) and (min-width: 1000px) {
  .flex-btn {
    flex-flow: column-reverse nowrap;
    gap: 4px 0;
  }

  .flex-btn a, .flex-btn .stats {
    width: 100%;
  }

  .stats {
    justify-content: space-evenly;
  }
}

@media screen and (max-width: 1000px) {
  .container {
    flex-flow: column nowrap;
    gap: 20px 0;
  }

  .container h3 {
    text-align: center;
  }
}

@media screen and (max-width: 760px) {
  .flex-btn {
    flex-flow: column-reverse nowrap;
    gap: 4px 0;
  }

  .flex-btn a, .flex-btn .stats {
    width: 100%;
  }

  .stats {
    justify-content: space-evenly;
  }
}

@media screen and (max-width: 600px) {
  .container {
    padding: 0 6vw;
  }

  h2 {
    margin: 0 3vw 30px;
  }
}
</style>

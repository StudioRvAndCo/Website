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
              <p>{{ YT_Playlists[i-1]['videos'].length }}</p>
              <p>{{ YT_Playlists[i-1]['statistics']['viewCount'] }}</p>
              <p>{{ YT_Playlists[i-1]['statistics']['likeCount'] }}</p>
              <p>{{ YT_Playlists[i-1]['statistics']['dislikeCount'] }}</p>
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
  gap: 0 10px;
}

.stats p {
  margin: 0;
  padding: 0;
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

@media screen and (max-width: 750px) {
  .flex-btn {
    flex-flow: column-reverse nowrap;
  }

  .flex-btn button {
    width: 100%;
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

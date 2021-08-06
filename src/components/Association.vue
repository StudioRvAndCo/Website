<template>
  <div id="association">
    <h2>{{ $t('the_association') }}</h2>
    <article>
      <p>{{ $t('association_summary') }}</p>

      <h3>{{ $t('some_numbers') }}</h3>
      <section id="numbers">
        <div>
          <h4>{{ $t('creation_date') }}</h4>
          <p>{{ $t('creation_date_value') }}</p>
        </div>
        <div>
          <h4>{{ $t('size') }}</h4>
          <p>10 {{ $t('members') }}.</p>
        </div>
        <div>
          <h4>{{ $t('projects') }}</h4>
          <p>{{ YT_Playlists.length }}</p>
        </div>
        <div>
          <h4>{{ $t('views') }}</h4>
          <p>{{ YT_Stats['viewCount'] }}</p>
        </div>
        <div>
          <h4>{{ $t('subscribers') }}</h4>
          <p>{{ YT_Stats['subscriberCount'] }}</p>
        </div>
      </section>

      <h3>{{ $t('members')}}</h3>
      <!-- TODO: Add crawlable members -->
      <section id="members">

      </section>

      <h3>{{ $t('content_creator') }}</h3>
      <section id="creators">
        <a v-for="content_creator in YT_Content_Creators" :key="content_creator" :href="'https://www.youtube.com/channel/'+content_creator['id']">
          <img :src="content_creator['picture']" :alt="content_creator['name']">
          <p>{{ content_creator['name'] }}</p>
        </a>
      </section>

      <h3>{{ $t('pictures') }}</h3>
      <!-- TODO: Link to Instagram API -->
      <section id="pictures">

      </section>
      <section id="button">
        <button class="btn primary-btn" type="button" @click="goto('https://www.instagram.com/studiorvandco')">{{ $t('more_pictures') }}</button>
      </section>
    </article>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Association',
  methods: {
    goto(url) {
      window.location = url;
    }
  },
  computed: {
    ...mapState(['YT_Stats', 'YT_Content_Creators', 'YT_Playlists'])
  }
}
</script>

<style scoped>
#association {
  padding: 50px 0;
  background-color: var(--alt-container);
}

article {
  padding: 0 15vw;
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

article p {
  margin: 0;
  font-size: 1.3em;
  text-align: justify;
  line-height: 1.36;
}

article h3 {
  margin: 50px 0 30px;
  font-size: 1.6em;
  font-weight: bold;
  text-transform: uppercase;
}

#numbers {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 20px 0;
  justify-content: center;
}

#numbers div {
  flex: 0 0 calc(100%/3);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 0 8px;
}

#numbers div h4 {
  margin: 0;
  font-weight: bold;
  font-size: 1.3em;
}

#creators {
  display: flex;
  flex-flow: row wrap;
  gap: 0 40px;
}

#creators a {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 8px 0;
}

#creators a img {
  width: auto;
  height: 88px;
  object-fit: cover;
  border-radius: 100%;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);
}

#creators a {
  color: var(--primary-text);
  text-decoration: none !important;
  transition: color .2s;
}

#creators a:hover {
  color: var(--secondary-text);
  transition: color .2s;
}

#button {
  width: 100%;
  text-align: center;
}

@media screen and (max-width: 600px) {
  h2 {
    margin: 0 3vw 30px;
  }

  article {
    padding: 0 6vw;
  }
}

@media screen and (max-width: 450px) {
  #button button {
    width: 100%;
  }
}
</style>

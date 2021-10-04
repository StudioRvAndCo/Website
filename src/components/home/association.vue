<template>
  <div id="association">
    <svg id="separator" xmlns="http://www.w3.org/2000/svg" width="1920" height="78.802" viewBox="0 0 1920 78.802">
      <path id="separator_path" d="M0,1033l45.7-7.7c45.6-7.6,137-23,228.5-23.1,91.5-.2,183.1,14.8,274.6,26.1,91.5,11.4,182.9,19,274.2,26.4,91.3,7.3,182.7,14.3,274,11.1,91.3-3.1,182.7-16.5,274.2-20.3s183.1,1.8,274.6.7c91.5-1.2,182.9-9.2,228.5-13.2l45.7-4v52H0Z" transform="translate(0 -1002.198)" fill="#393939" />
    </svg>

    <h2 class="super_title">{{ $t('the_association') }}</h2>

    <article>
      <p>{{ $t('association_summary') }}</p>

      <h3>{{ $t('some_numbers') }}</h3>
      <section id="numbers">
        <div>
          <h4 id="int_association_age"></h4>
          <p>
            <span v-if="association_age > 1">{{ $tc('year', 2) }}</span>
            <span v-else>{{ $tc('year', 1) }}</span>
          </p>
        </div>
        <div>
          <h4 id="int_members"></h4>
          <p>{{ $t('members') }}</p>
        </div>
        <div>
          <h4 id="int_projects"></h4>
          <p>{{ $t('projects') }}</p>
        </div>
        <div>
          <h4 id="int_views"></h4>
          <p>{{ $t('views') }}</p>
        </div>
        <div>
          <h4 id="int_subscribers"></h4>
          <p>{{ $t('subscribers') }}</p>
        </div>
      </section>

      <h3>{{ $t('members')}}</h3>
      <!-- TODO: Add crawlable members -->
      <section id="members">
        Coucou 👋
      </section>

      <h3>{{ $t('content_creator') }}</h3>
      <section id="creators">
        <a v-for="content_creator in YT_Content_Creators" :key="content_creator" :href="'https://www.youtube.com/channel/'+content_creator['id']">
          <img :src="content_creator['picture']" :alt="content_creator['name']">
          <p>{{ content_creator['name'] }}</p>
        </a>
      </section>

      <h3>{{ $t('pictures') }}</h3>
      <section id="pictures">
        <a v-for="post in Insta_Posts['data']" :key="post" :href="post.permalink">
          <img :src="post.media_url" alt="Instagram post">
        </a>
      </section>

      <section id="button">
        <a class="btn primary-btn" href="https://www.instagram.com/studiorvandco">{{ $t('more_pictures') }}</a>
      </section>
    </article>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Association',
  props: ['color'],
  computed: {
    ...mapState(['YT_Stats', 'YT_Content_Creators', 'YT_Playlists', 'Insta_Posts']),
    association_age() {
      let age = Date.now() - new Date(2020, 9, 9).getTime();
      return Math.abs(new Date(age).getUTCFullYear() - 1970);
    }
  },
  mounted() {
    if (this.color) document.getElementById('separator_path').style.fill = "#606060";

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('int_association_age').style.setProperty('--num', this.association_age.toString());
          document.getElementById('int_members').style.setProperty('--num', '10');
          document.getElementById('int_projects').style.setProperty('--num', this.YT_Playlists.length.toString());
          document.getElementById('int_views').style.setProperty('--num', this.YT_Stats['viewCount'].toString());
          document.getElementById('int_subscribers').style.setProperty('--num', this.YT_Stats['subscriberCount'].toString());
        }
      })
    })
    observer.observe(document.getElementById('numbers'))
  }
}
</script>

<style scoped>
#association {
  position: relative;
  background-image: url("../../assets/bg_association.svg");
  background-color: var(--alt-container);
}

#separator {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(180deg);
}

.super_title {
  padding: 70px 0 20px;
}

article {
  margin: 0 auto;
  padding: 0 12px;
  max-width: 1120px;
}

article p {
  margin: 0;
  text-align: center;
  line-height: 1.3;
  font-size: 1.1em;
  font-weight: 300;
}

article h3 {
  margin: 30px 0 20px;
  font-size: 1.4em;
  font-weight: 600;
  text-transform: uppercase;
}

#numbers {
  padding: 18px;
  border-radius: 8px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  gap: 30px 0;
  background-color: var(--background-color);
  box-shadow: inset 0 0 5px 5px #2a2a2a;
}

#numbers div {
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 6px 0;
  border-right: 2px solid var(--container);
}

#numbers div:last-of-type {
  border: none;
}

#numbers div + #numbers div {
  border-left: solid 1px white;
}

@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

#numbers div h4 {
  margin: 0;
  font-weight: bold;
  font-size: 1.6em;
  animation: counter 3.2s alternate ease-out;
  counter-reset: num var(--num);
}

#numbers div h4::after {
  content: counter(num);
}

@keyframes counter {
  from {
    --num: 0;
  }
}

#numbers div p {
  margin: 0;
  font-size: .94em;
}

#creators {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  gap: 0 40px;
}

#creators a img {
  width: auto;
  height: 90px;
  object-fit: cover;
  border-radius: 100%;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);
}

#creators a {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 10px 0;
  color: var(--primary-text);
  text-decoration: none !important;
  transition: transform .15s;
}

#creators a:hover {
  transform: scale(1.1);
  transition: transform .15s;
}

#creators a p {
  font-weight: 400;
}

#button {
  width: 100%;
  text-align: center;
  padding-bottom: 40px;
}

#pictures {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  flex: 0 0 calc(100%/3);
  gap: 20px;
  margin-bottom: 30px;
}

#pictures a {
  transition: transform .15s;
}

#pictures a:hover {
  transform: scale(1.04);
  transition: transform .15s;
}

#pictures a img {
  display: block;
  width: auto;
  max-width: 25vh;
  height: auto;
  border-radius: 8px;
}

@media screen and (max-width: 600px) {
  h2 {
    margin: 0 3vw 30px;
  }

  article {
    padding: 0 6vw;
  }
}

@media screen and (max-width: 520px) and (min-width: 360px) {
  #numbers div {
    flex: 1 1 30%;
  }

  #numbers div:nth-child(3) {
    border: none;
  }
}

@media screen and (max-width: 450px) {
  #button button {
    width: 100%;
  }
}

@media screen and (max-width: 360px) {
  #numbers div {
    flex: 1 1 40%;
  }

  #numbers div:nth-child(even) {
    border: none;
  }
}
</style>

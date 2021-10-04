<template>
  <article id="title">
    <img id="banner" :src="require('@/' + Banners[0])" :alt="$t(YT_Playlists[id]['infos']['title'])">
    <svg id="separator" xmlns="http://www.w3.org/2000/svg" width="1920" height="78.802" viewBox="0 0 1920 78.802">
      <path d="M0,1033l45.7-7.7c45.6-7.6,137-23,228.5-23.1,91.5-.2,183.1,14.8,274.6,26.1,91.5,11.4,182.9,19,274.2,26.4,91.3,7.3,182.7,14.3,274,11.1,91.3-3.1,182.7-16.5,274.2-20.3s183.1,1.8,274.6.7c91.5-1.2,182.9-9.2,228.5-13.2l45.7-4v52H0Z" transform="translate(0 -1002.198)" fill="#393939" />
    </svg>
  </article>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Productions',
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState(['YT_Playlists', 'Banners'])
  }
}
</script>

<style scoped>
#title {
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

#separator {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>

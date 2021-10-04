<template>
  <presentation/>
  <episodes/>

  <div>
    <router-link to="/" class="btn">{{ $t('back_home') }}</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import presentation from "@/components/playlist/presentation";
import episodes from "@/components/playlist/episodes";

export default {
  name: 'Home',
  components: {
    presentation,
    episodes
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapState(['YT_Playlists'])
  }
}
</script>

<style scoped>
div {
  padding: 20px 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
</style>
<template>
  <div id="presentation">
    <section>
      <img id="banner" alt="Vue logo" src="@/assets/DSCN8325.jpg">
      <div>
        <h1>{{ $t('motto') }}</h1>
        <button class="btn primary-btn" type="button" @click="() => $router.push('/#association')">{{ $t('read_more') }}</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Productions',
  methods: {
    goto(url) {
      window.location = url;
    }
  },
}
</script>

<style scoped>
#banner {
  width: 100%;
  height: 650px;
  margin-top: -70px;
  object-fit: cover;
}

#presentation section {
  z-index: 0;
  position: relative;
  margin-bottom: -4px;
}

#presentation section div {
  padding: 0 12vw;
  position: absolute;
  bottom: 70px;
}

#presentation section h1 {
  margin: 0 0 14px;
  font-size: 2.4em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  #presentation section div {
    padding: 0 3vw;
  }
}

@media screen and (max-width: 450px) {
  #presentation section div h1 {
    text-align: center;
  }

  #presentation section div button {
    width: 100%;
  }
}
</style>

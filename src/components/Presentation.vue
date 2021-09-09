<template>
  <article>
    <video src="@/assets/Presentation.mp4" oncontextmenu="return false;" autoplay loop muted></video>
    <div>
      <section>
        <h1>{{ $t('motto') }}</h1>
        <router-link class="btn primary-btn" to="/#association">{{ $t('read_more') }}</router-link>
      </section>
    </div>
    <img src="@/assets/separator_1.svg" :alt="$t('separator')">
  </article>
</template>

<script>
export default {
  name: 'Productions'
}
</script>

<style scoped>
article {
  position: relative;
  margin-bottom: -4px;
}

video {
  width: 100%;
  min-height: 350px;
  max-height: 580px;
  margin-top: -64px;
  object-fit: cover;
}

div {
  position: absolute;
  bottom: 102px;
  width: 100%;
}

section {
  margin: 0 auto;
  padding: 0 12px;
  max-width: 1120px;
}

h1 {
  margin: 0 0 20px;
  font-size: 2.5em;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 0 .8em var(--background-color), 0 0 0.2em var(--background-color);
}

img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

@media screen and (max-width: 950px) {
  div {
    top: 0;
    bottom: 0;
    height: calc(350px - 64px);
  }

  section {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: calc(100% - 12px * 2);
    text-align: center;
  }
}
</style>

<template>
  <article id="home">
    <img id="banner" alt="Vue logo" src="@/assets/DSCN8325.jpg">
    <section>
      <h1>{{ $t('motto') }}</h1>
      <button class="btn primary-btn" type="button">{{ $t('read_more') }}</button>
    </section>

    <Productions />
    <Association />
  </article>
</template>

<script>
import Productions from "@/components/Productions";
import Association from "@/components/Association";

export default {
  name: 'Home',
  components: {
    Productions,
    Association
  }
}
</script>

<style scoped>
#banner {
  width: 100%;
  height: 650px;
  margin-top: -70px;
  object-fit: cover;
}

#home section {
  margin: -200px 0 126px 12vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}

#home section h1 {
  margin: 0 0 14px;
  font-size: 2.5em;
  text-transform: uppercase;

}
</style>
<template>
  <article id="home">
    <section>
      <img id="banner" alt="Vue logo" src="@/assets/DSCN8325.jpg">
      <div>
        <h1>{{ $t('motto') }}</h1>
        <button class="btn primary-btn" type="button">{{ $t('read_more') }}</button>
      </div>
    </section>

    <Productions />
    <Association />
    <Contact />
  </article>
</template>

<script>
import Productions from "@/components/Productions";
import Association from "@/components/Association";
import Contact from "@/components/Contact";

export default {
  name: 'Home',
  components: {
    Productions,
    Association,
    Contact
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
  z-index: 0;
  position: relative;
  margin-bottom: -4px;
}

#home section div {
  padding: 0 12vw;
  position: absolute;
  bottom: 70px;
}

#home section h1 {
  margin: 0 0 14px;
  font-size: 2.4em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  #home section div {
    padding: 0 3vw;
  }
}

@media screen and (max-width: 450px) {
  #home section div h1 {
    text-align: center;
  }

  #home section div button {
    width: 100%;
  }
}
</style>
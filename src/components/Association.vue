<template>
  <div id="association">
    <h2>{{ $t('the_association') }}</h2>
    <article id="main_content">
      <p>Le Studio Rv & Co est un regroupement d'amis passionnés par le monde du cinéma. Ensemble, nous produisons du début à la fin des courts-métrages ou des séries amateurs sur des thèmes variés qui nous plaisent.</p>

      <h3>Quelques chiffres</h3>
      <section id="numbers">

      </section>

      <h3>Membres</h3>
      <!-- Add crawlable members -->
      <h3>Créateur de contenus</h3>

      <h3>Photos</h3>
      <section id="pictures">

      </section>
      <section id="button">
        <button class="btn primary-btn" type="button" @click="goto('https://www.instagram.com/studiorvandco')">Plus de photos...</button>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Association',
  methods: {
    goto(url) {
      window.location = url;
    }
  }
}
</script>

<style scoped>
#association {
  padding: 50px 0;
  background-color: var(--alt-container);
}

#main_content {
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

#main_content p {
  margin: 0;
  font-size: 1.3em;
  text-align: justify;
  line-height: 1.36;
}

#main_content h3 {
  margin: 50px 0 30px;
  font-size: 1.6em;
  font-weight: bold;
  text-transform: uppercase;
}

#button {
  width: 100%;
  text-align: center;
}
</style>

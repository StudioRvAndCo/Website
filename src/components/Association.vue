<template>
  <div id="association">
    <h2>{{ $t('the_association') }}</h2>
    <article id="main_content">
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
          <p>2</p>
        </div>
        <div>
          <h4>{{ $t('views') }}</h4>
          <!-- TODO: Link to Youtube API -->
          <p>1000</p>
        </div>
        <div>
          <h4>{{ $t('subscribers') }}</h4>
          <!-- TODO: Link to Youtube API -->
          <p>67</p>
        </div>
      </section>

      <h3>{{ $t('members')}}</h3>
      <!-- TODO: Add crawlable members -->
      <section id="members">

      </section>

      <h3>{{ $t('content_creator') }}</h3>
      <!-- TODO: Get featured channels from Youtube -->
      <section id="channels">

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

#button {
  width: 100%;
  text-align: center;
}
</style>

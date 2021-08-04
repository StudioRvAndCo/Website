<template>
  <div id="productions">
    <h2>{{ $t('main_productions') }}</h2>

    <article>
      <div class="container">
        <img src="@/assets/star_wars.jpg" :alt="$t('star_wars_quest_justice_poster')">
        <section>
          <div>
            <h3>{{ $t('star_wars_quest_justice') }}</h3>
            <p>{{ $t('star_wars_quest_justice_summary') }}</p>
          </div>
          <div class="flex-btn">
            <button class="btn primary-btn" type="button">{{ $t('watch') }}</button>
          </div>
        </section>
      </div>
    </article>
    <article>
      <div class="container c_reverse">
        <img src="@/assets/ete_entre_amis.jpg" :alt="$t('summer_among_friends_poster')">
        <section>
          <div>
            <h3>{{ $t('summer_among_friends') }}</h3>
            <p>{{ $t('summer_among_friends_summary') }}</p>
          </div>
          <div class="flex-btn">
            <button class="btn primary-btn" type="button">{{ $t('watch') }}</button>
          </div>
        </section>
      </div>
    </article>

    <!-- TODO: Add crawlable productions -->
    <!-- <div id="other_productions"></div> -->

  </div>
</template>

<script>
export default {
  name: 'Productions',
}
</script>

<style scoped>
/* TODO: Improve Responsive design */
#productions {
  padding: 50px 0 0;
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

article {
  padding: 40px 0;
}

article:first-of-type {
  padding-top: 0;
}

article:nth-child(odd) {
  background-color: var(--container);
}

.container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0 40px;
  padding: 0 15vw;
}

.c_reverse {
  flex-flow: row-reverse nowrap;
}

.container img {
  width: auto;
  height: 200px;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);
}

.container section {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}

.container section h3 {
  margin: 0 0 12px;
  font-size: 1.6em;
  font-weight: bold;
}

.container section p {
  margin: 0 0 12px;
  font-size: 1.2em;
  text-align: justify;
  line-height: 1.36;
  color: var(--secondary-text);
}

.flex-btn {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 0 40px;
}

@media screen and (max-width: 1000px) {
  .container {
    flex-flow: column nowrap;
    gap: 20px 0;
  }

  .container h3 {
    text-align: center;
  }
}

@media screen and (max-width: 750px) {
  .flex-btn {
    flex-flow: column-reverse nowrap;
  }

  .flex-btn button {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .container {
    padding: 0 6vw;
  }

  h2 {
    margin: 0 3vw 30px;
  }
}
</style>

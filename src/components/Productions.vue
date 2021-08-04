<template>
  <div id="productions">
    <h2>{{ $t('main_productions') }}</h2>

    <div id="main_productions">
      <article>
        <img src="@/assets/star_wars.jpg" :alt="$t('star_wars_quest_justice_poster')">
        <section>
          <div>
            <h3>{{ $t('star_wars_quest_justice') }}</h3>
            <p>{{ $t('star_wars_quest_justice_summary') }}</p>
          </div>
          <div class="flex-btn">
            <button class="btn primary-btn" type="button">{{ $t('watch') }}</button>
            <button class="btn secondary-btn" type="button">{{ $t('making_of') }}</button>
          </div>
        </section>
      </article>
      <article>
        <img src="@/assets/ete_entre_amis.jpg" :alt="$t('summer_among_friends_poster')">
        <section>
          <div>
            <h3>{{ $t('summer_among_friends') }}</h3>
            <p>{{ $t('summer_among_friends_summary') }}</p>
          </div>
          <div class="flex-btn">
            <button class="btn primary-btn" type="button">{{ $t('watch') }}</button>
            <button class="btn tertiary-btn" type="button">{{ $t('making_of') }}</button>
          </div>
        </section>
      </article>
    </div>

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

h2::before {
  border-top: .0625em solid;
  content: "";
  flex: 1;
  margin: 0 16px 0 .1em;
}

h2 {
  margin: 0 12vw -10px;
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

#main_productions article {
  padding: 40px 15vw;
  gap: 0 50px;
  display: flex;
  flex-flow: row nowrap;
}

#main_productions article:nth-child(even) {
  background-color: var(--container);
  flex-flow: row-reverse nowrap;
}

#main_productions article img {
  width: auto;
  height: 200px;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);
}

#main_productions article section {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}

#main_productions article section h3 {
  margin: 0 0 12px;
  font-size: 1.6em;
  font-weight: bold;
}

#main_productions article section p {
  margin: 0;
  font-size: 1.3em;
  text-align: justify;
  line-height: 1.36;
  color: var(--secondary-text);
}

.flex-btn {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  gap: 0 50px;
}
</style>

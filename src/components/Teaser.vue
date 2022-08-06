<template>
  <article>
    <!-- Title -->
    <h2>Ouais, on produit des trucs 😎</h2>
    <section>
      <!-- Teaser -->
      <video
        autoplay
        muted
        loop
        preload="none"
        poster="@/assets/img/thumbnail.webp"
      >
        <source src="@/assets/vid/teaser.mp4" type="video/mp4" />
      </video>

      <!-- Numbers -->
      <div>
        <h3>Quelques chiffres</h3>
        <div>
          <p><span>10</span> Membres</p>
          <p><span>6</span> Projets</p>
          <p><span>5 236</span> Vues</p>
          <p><span>112</span> Abonnées</p>
          <p><span>1</span> An</p>
        </div>
        <router-link to="/#association" class="btn"
          >En savoir plus...</router-link
        >
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "TeaserComponent",
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 2.3em;
  font-weight: 800;
  text-shadow: 0 0 0.8em var(--background-color),
    0 0 0.2em var(--background-color);

  &::before,
  &::after {
    content: none;
  }
}

section {
  display: grid;
  grid-template-columns: 1.6fr 0.6fr;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  video {
    @include box-shadow;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: var(--border-radius);
  }

  & > div {
    height: 100%;
    box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%),
      0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);
    background-color: var(--bg-color);
    border-radius: var(--border-radius);
    padding: 1rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    h3 {
      text-align: center;
      font-size: 1.5em;
    }

    & > div {
      width: 100%;
      height: inherit;
      background-color: var(--projects-bg-color);
      border-radius: var(--border-radius);
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-between;
      gap: 0;

      p {
        width: inherit;
        padding: 1rem;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2em;
        gap: 8px;

        &::after {
          content: "";
          position: absolute;
          left: 2.2em;
          right: 2.2em;
          bottom: -6%;
          height: 2px;
          border-radius: var(--border-radius);
          background-color: rgba(255, 255, 255, 0.15);
        }

        &:last-of-type::after {
          content: none;
        }

        span {
          padding-bottom: 2px;
          font-size: 1.3em;
          font-weight: 700;
        }
      }
    }
  }
}
</style>

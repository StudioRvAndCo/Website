<template>
  <header>
    <!-- Logo -->
    <router-link :to="{ name: 'home' }">
      <img src="@/assets/img/logo.png" alt="Studio Rv & Co" />
      <h1>Studio Rv & Co</h1>
    </router-link>

    <!-- Navigation -->
    <nav>
      <router-link to="/">
        {{ $t("header.home") }}
      </router-link>
      <router-link to="/#productions">
        {{ $t("header.productions") }}
      </router-link>
      <router-link to="/projects">
        {{ $t("header.projects") }}
      </router-link>
      <router-link to="/association">
        {{ $t("header.association") }}
      </router-link>
      <router-link to="/contact">
        {{ $t("header.contact") }}
      </router-link>
    </nav>

    <!-- Links -->
    <section>
      <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ">
        <font-awesome-icon icon="fa-brands fa-youtube" />
      </a>
      <a href="https://twitter.com/studiorvandco">
        <font-awesome-icon icon="fa-brands fa-twitter" />
      </a>
      <a href="https://www.instagram.com/studiorvandco">
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </a>
      <a href="https://www.twitch.tv/studiorvandco">
        <font-awesome-icon icon="fa-brands fa-twitch" />
      </a>
    </section>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped lang="scss">
@import "@/assets/mixin.scss";
$height: 70px;

header {
  @include full-width-background-color(var(--bg-color));
  @include max-width(var(--max-width-header));
  height: $height;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  a {
    transition: color 200ms;
    text-decoration: none;
    color: var(--subtext-color);

    &:hover {
      color: var(--text-color);
    }
  }

  & > *:first-child {
    justify-self: start;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    color: var(--subtext-color) !important;

    img {
      padding: 0.3rem;
      max-height: $height;
    }

    h1 {
      font-size: 1.4em;
    }
  }

  nav {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }

  section {
    justify-self: end;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.3rem;
    font-size: 1.3em;
  }
}
</style>

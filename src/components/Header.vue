<template>
  <header>
    <div>
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
        <router-link to="/#projects">
          {{ $t("header.projects") }}
        </router-link>
        <router-link to="/#association">
          {{ $t("header.association") }}
        </router-link>
        <router-link to="/#contact">
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
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped lang="scss">
$height: 60px;

header {
  z-index: 100;
  height: $height;
  width: 100%;
  padding-inline: 1rem;
  position: sticky;
  top: 0;
  background-color: var(--bg-color);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);

  div {
    max-width: var(--max-width-header);
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    a {
      transition: color 200ms;
      text-decoration: none;
      color: var(--subtext-color);

      &:hover {
        color: var(--text-color);
      }
    }

    > *:first-child {
      justify-self: start;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--subtext-color) !important;

      img {
        padding: 0.4rem;
        max-height: $height;
      }

      h1 {
        font-size: 1.3em;
      }
    }

    nav {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      justify-items: center;

      a {
        padding: 1rem 1.5rem;
      }
    }

    section {
      justify-self: end;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      font-size: 1.3em;

      a {
        padding: 1rem 0.75rem;
      }
    }
  }
}
</style>

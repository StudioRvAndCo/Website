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
        <router-link to="/" :class="nav === 'home' ? 'current' : ''">
          {{ $t("header.home") }}
        </router-link>
        <router-link
          to="/#productions"
          :class="nav === 'productions' ? 'current' : ''"
        >
          {{ $t("header.productions") }}
        </router-link>
        <router-link
          to="/#projects"
          :class="nav === 'projects' ? 'current' : ''"
        >
          {{ $t("header.projects") }}
        </router-link>
        <router-link
          to="/#association"
          :class="nav === 'association' ? 'current' : ''"
        >
          {{ $t("header.association") }}
        </router-link>
        <router-link to="/#contact" :class="nav === 'contact' ? 'current' : ''">
          {{ $t("header.contact") }}
        </router-link>
      </nav>

      <!-- Links -->
      <section>
        <a
          href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ"
          title="YouTube"
        >
          <font-awesome-icon icon="fa-brands fa-youtube" />
        </a>
        <a href="https://twitter.com/studiorvandco" title="Twitter">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
        <a href="https://www.instagram.com/studiorvandco" title="Instagram">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
        <a
          href="https://www.twitch.tv/studiorvandco"
          :class="livestream ? 'on-air' : ''"
          title="Twitch"
        >
          <font-awesome-icon icon="fa-brands fa-twitch" />
        </a>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: ["nav", "livestream"],
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
        display: inline-flex;
        justify-content: center;
        padding: 1rem 0.75rem;
      }
    }

    @media (max-width: 1080px) {
      grid-template-columns: repeat(2, 1fr);

      section {
        display: none;
      }
    }

    @media (max-width: 850px) {
      h1 {
        display: none;
      }
    }

    @media (max-width: 660px) {
      nav {
        display: none;
      }

      h1 {
        display: unset;
      }
    }
  }
}

.current {
  color: var(--text-color) !important;
}

.on-air {
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 13px;
    right: 11px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--btn-color);
  }

  &::after {
    animation: pulse-scale 2.6s infinite;
  }

  @keyframes pulse-scale {
    0% {
      opacity: 0.7;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(2.4);
    }
  }
}
</style>

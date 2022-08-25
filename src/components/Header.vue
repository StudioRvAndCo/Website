<template>
  <header>
    <div>
      <!-- Logo -->
      <router-link :to="{ name: 'home' }" @click="mobile = false">
        <img
          src="@/assets/img/logo.webp"
          alt="Studio Rv & Co"
          width="50"
          height="60"
          loading="lazy"
        />
        <h1>Studio Rv & Co</h1>
      </router-link>

      <!-- Navigation -->
      <nav>
        <font-awesome-icon
          icon="fa-solid fa-bars"
          id="mobile"
          @click="mobile = !mobile"
        />
        <section :class="mobile ? 'appear' : ''">
          <div>
            <router-link
              to="/"
              :class="nav === 'home' ? 'current' : ''"
              @click="mobile = false"
            >
              {{ $t("header.home") }}
            </router-link>
            <router-link
              to="/#productions"
              :class="nav === 'productions' ? 'current' : ''"
              @click="mobile = false"
            >
              {{ $t("header.productions") }}
            </router-link>
            <router-link
              to="/#projects"
              :class="nav === 'projects' ? 'current' : ''"
              @click="mobile = false"
            >
              {{ $t("header.projects") }}
            </router-link>
            <router-link
              to="/#association"
              :class="nav === 'association' ? 'current' : ''"
              @click="mobile = false"
            >
              {{ $t("header.association") }}
            </router-link>
            <router-link
              to="/#contact"
              :class="nav === 'contact' ? 'current' : ''"
              @click="mobile = false"
            >
              {{ $t("header.contact") }}
            </router-link>
          </div>
        </section>
        <span :class="mobile ? 'appear' : ''" @click="mobile = false"></span>
      </nav>

      <!-- Links -->
      <section :class="mobile ? 'appear' : ''">
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
  data() {
    return {
      mobile: false,
      body: document.getElementsByTagName("body")[0],
    };
  },
  watch: {
    mobile(active) {
      if (active) {
        this.body.style.overflowY = "hidden";
      } else {
        this.body.style.overflowY = "overlay";
      }
    },
  },
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

  > div {
    max-width: var(--max-width-header);
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    position: relative;

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

    > nav {
      display: flex;
      align-items: center;
      position: relative;

      #mobile {
        display: none;
        font-size: 1.4em;
        padding: 1rem;
        cursor: pointer;
      }

      section div {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;

        a {
          position: relative;

          &::after {
            transition: all 250ms;
            opacity: 0;
            border: 1px solid var(--text-color);
            border-radius: var(--border-radius);
            content: "";
            position: absolute;
            left: 50%;
            right: 50%;
            bottom: 0.4rem;
          }
        }
      }

      span {
        display: none;
      }

      a {
        padding: 1rem 1.5rem;
      }
    }

    > section {
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

      > section {
        display: none;
      }
    }

    @media (max-width: 850px) {
      h1 {
        display: none;
      }
    }

    @media (max-width: 660px) {
      grid-template-columns: 1.5fr 0.5fr;

      .appear {
        transform: translateX(0) !important;
      }

      nav {
        justify-self: end;

        #mobile {
          display: unset;
        }

        span {
          z-index: -1;
          position: absolute;
          top: $height - 3px;
          right: -16px;
          width: 100vw;
          height: calc(100vh - $height);

          &.appear {
            display: block;
          }
        }

        section {
          position: fixed;
          top: $height;
          right: 0;
          width: 212px;
          height: calc(100vh - $height);
          background-color: rgba(57, 57, 57, 0.96);
          backdrop-filter: blur(4px);
          transform: translateX(212px);
          transition: transform 250ms;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11),
            0 2px 2px rgba(0, 0, 0, 0.11), 0 4px 4px rgba(0, 0, 0, 0.11),
            0 6px 8px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11);

          div {
            width: 100%;
            height: calc(100vh - $height - 66px);
            display: flex;
            flex-flow: column nowrap;
            overflow-y: overlay;
          }

          a {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
        }
      }

      > section {
        position: fixed;
        bottom: 0.35rem;
        right: 1rem;
        z-index: 1;
        display: unset;
        transform: translateX(212px);
        transition: transform 250ms;
      }

      h1 {
        display: unset;
      }
    }

    @media (max-width: 320px) {
      h1 {
        display: none;
      }

      nav {
        span.appear {
          display: none;
        }

        section {
          width: 100vw;
          left: unset;
          transform: translateX(320px);
        }
      }

      > section {
        width: 100%;
        text-align: center;
        transform: translateX(320px);
      }
    }
  }
}

.current {
  color: var(--text-color) !important;
  position: relative;

  &::after {
    opacity: 1;
    left: 1.7rem;
    right: 1.7rem;
  }
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

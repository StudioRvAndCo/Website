<template>
  <article id="contact">
    <!-- Title -->
    <h2>{{ $t("contact.self") }}</h2>
    <section>
      <div>
        <h3>Studio Rv & Co</h3>
        <p>Email : <a href="mailto:studio@rvandco.fr">studio@rvandco.fr</a></p>
      </div>
      <hr />
      <div>
        <h3>{{ $t("contact.social-networks") }}</h3>
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
          <a href="https://www.twitch.tv/studiorvandco" title="Twitch">
            <font-awesome-icon icon="fa-brands fa-twitch" />
          </a>
        </section>
      </div>
      <hr />
      <div>
        <img
          src="@/assets/img/full_logo.webp"
          alt="Studio Rv & Co"
          width="246"
          height="120"
          loading="lazy"
        />
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "ContactComponent",
};
</script>

<style scoped lang="scss">
#contact {
  @include max-width(var(--max-width-content));
  padding: var(--spacing) 0;

  h2 {
    text-shadow: #393939 0 0 12px;
  }

  > section {
    background-color: var(--bg-color);
    border-radius: var(--border-radius);
    padding: calc(var(--spacing) / 2);
    display: grid;
    grid-template-columns: 1fr 0.01fr 1fr 0.01fr 1fr;
    justify-items: center;
    align-items: center;
    gap: 2rem;

    hr {
      align-self: center;
      height: 100px;
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: var(--border-radius);
    }

    > div {
      h3 {
        margin-bottom: 1rem;
      }

      p {
        color: var(--subtext-color);

        a {
          text-decoration: none;
          color: var(--subtext-color);
          transition: color 250ms;

          &:hover {
            color: var(--text-color);
          }
        }
      }

      img {
        max-height: 120px;
      }

      > section {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;

        a {
          padding: 0 0.7rem 0.7rem;
          font-size: 1.6rem;
          color: var(--subtext-color);
          transform: scale(1);
          transition: all 250ms;

          &:hover {
            transform: scale(1.1);
            color: var(--text-color);
          }
        }
      }
    }

    @media (max-width: 870px) {
      grid-template-columns: 1fr 0.01fr 1fr;

      div:last-of-type,
      hr:last-of-type {
        display: none;
      }
    }

    @media (max-width: 580px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto minmax(0, 1fr);
      align-items: unset;

      hr {
        height: 1px;
        width: 120px;
      }

      > div {
        text-align: center;

        > section a {
          padding: 0 0.7rem;
        }
      }
    }
  }

  @media (max-width: 450px) {
    width: 100%;

    h2 {
      @include max-width(var(--max-width-content));
    }

    > section {
      border-radius: unset;
    }
  }
}
</style>

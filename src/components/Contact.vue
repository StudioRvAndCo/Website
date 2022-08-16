<template>
  <article id="contact">
    <!-- Title -->
    <h2>Nous contacter</h2>
    <section>
      <div>
        <h3>Studio Rv & Co</h3>
        <p>
          4 Lotissement Cantalause<br />
          31450 Montgiscard, France
        </p>
        <p>Email : <a href="mailto:studio@rvandco.fr">studio@rvandco.fr</a></p>
      </div>
      <hr />
      <div>
        <h3>{{ $t("social-networks") }}</h3>
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
      <hr />
      <div>
        <img src="@/assets/img/full_logo.png" alt="Studio Rv & Co" />
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

  > section {
    background-color: var(--bg-color);
    border-radius: var(--border-radius);
    padding: calc(var(--spacing) / 2);
    display: flex;
    justify-content: space-around;
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
        margin-bottom: 0.6rem;

        a {
          text-decoration: none;
          color: var(--subtext-color);
          transition: color 250ms;

          &:hover {
            color: var(--text-color);
          }
        }

        &:last-of-type {
          margin-bottom: unset;
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
  }
}
</style>

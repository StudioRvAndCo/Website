<template>
  <article id="association">
    <div>
      <!-- Title -->
      <h2>L'association</h2>
      <p>
        Le Studio Rv & Co est un regroupement d'amis passionnés par le monde du
        cinéma. Ensemble, nous produisons du début à la fin des courts-métrages
        ou des séries amateurs sur des thèmes variés qui nous plaisent.
      </p>

      <!-- Members -->
      <section>
        <div>
          <img src="@/assets/img/association/mael.webp" alt="Maël" />
          <p>Maël</p>
        </div>
        <a href="https://www.youtube.com/channel/UC9ZVyJocXPlUCiwggkHsmDg">
          <img src="@/assets/img/association/thomas.webp" alt="Thomas" />
          <p>Thomas</p>
        </a>
        <a href="https://www.youtube.com/channel/UCYl-DuOSdkMfsIbLmVPiPOA">
          <img src="@/assets/img/association/florent.webp" alt="Florent" />
          <p>Florent</p>
        </a>
        <a href="https://www.youtube.com/channel/UCznR2syShlluEzWRoD7XZRQ">
          <img src="@/assets/img/association/mathis.webp" alt="Mathis" />
          <p>Mathis</p>
        </a>
      </section>

      <hr />

      <!-- Instagram posts -->
      <section>
        <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ">
          <img src="@/assets/img/logo.png" alt="Logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ">
          <img src="@/assets/img/logo.png" alt="Logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ">
          <img src="@/assets/img/logo.png" alt="Logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ">
          <img src="@/assets/img/logo.png" alt="Logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ">
          <img src="@/assets/img/logo.png" alt="Logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ">
          <img src="@/assets/img/logo.png" alt="Logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ">
          <img src="@/assets/img/logo.png" alt="Logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ">
          <img src="@/assets/img/logo.png" alt="Logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ">
          <img src="@/assets/img/logo.png" alt="Logo" />
        </a>
        <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ">
          <img src="@/assets/img/logo.png" alt="Logo" />
        </a>
      </section>

      <a href="https://www.instagram.com/studiorvandco" class="btn">
        Plus de photos...
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: "AssociationComponent",
};
</script>

<style scoped lang="scss">
#association {
  background-image: url("@/assets/svg/association.svg");
  @include full-width-background-color(var(--association-bg-color));
  padding: var(--spacing) 0;

  > div {
    @include max-width(var(--max-width-content));

    p {
      text-align: center;
      color: var(--subtext-color);
    }

    .btn {
      margin-top: 3rem;
      display: block;
      margin-inline: auto;
    }

    section:first-of-type {
      margin-top: calc(var(--spacing) / 1.5);
      display: flex;
      justify-content: space-around;
      gap: 2rem;

      a,
      div {
        width: max-content;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        transform: scale(1);
        transition: transform 250ms;
        text-decoration: none;

        img {
          max-height: 120px;
          border-radius: 50%;
        }

        p {
          color: var(--text-color);
        }
      }

      a {
        p::after {
          content: "";
          height: 2px;
          position: absolute;
          bottom: -0.5rem;
          left: 2.5rem;
          right: 2.5rem;
          border-radius: var(--border-radius);
          background-color: var(--subtext-color);
        }

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    hr {
      margin: calc(var(--spacing) / 1.5) auto;
      border-color: rgba(255, 255, 255, 0.4);
      width: 50%;
      border-radius: var(--border-radius);
    }

    section:last-of-type {
      display: flex;
      gap: 3rem 4rem;
      justify-content: space-evenly;
      flex-wrap: wrap;

      a {
        transform: scale(1);
        transition: transform 250ms;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>

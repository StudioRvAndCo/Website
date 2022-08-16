<template>
  <article id="association">
    <div>
      <!-- Title -->
      <h2>{{ $t("association.self") }}</h2>
      <p>{{ $t("association.description") }}</p>

      <!-- Members -->
      <section>
        <div>
          <div>
            <img src="@/assets/img/association/mael.webp" alt="Maël" />
          </div>
          <p>Maël</p>
        </div>
        <a href="https://www.youtube.com/channel/UC9ZVyJocXPlUCiwggkHsmDg">
          <div>
            <img src="@/assets/img/association/thomas.webp" alt="Thomas" />
          </div>
          <p>Thomas</p>
        </a>
        <a href="https://www.youtube.com/channel/UCYl-DuOSdkMfsIbLmVPiPOA">
          <div>
            <img src="@/assets/img/association/florent.webp" alt="Florent" />
          </div>
          <p>Florent</p>
        </a>
        <a href="https://www.youtube.com/channel/UCznR2syShlluEzWRoD7XZRQ">
          <div>
            <img src="@/assets/img/association/mathis.webp" alt="Mathis" />
          </div>
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
        {{ $t("association.more-pictures") }}
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
      > div {
        font-weight: 600;
        width: max-content;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        transform: scale(1);
        transition: transform 250ms;
        text-decoration: none;

        div {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: rgba(0, 0, 0, 0.15) 0 8px 16px 0;

          img {
            max-width: 100%;
            max-height: 100%;
            transform: scale(1);
            transition: transform 250ms;
          }
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
          left: 2.7rem;
          right: 2.7rem;
          border-radius: var(--border-radius);
          background-color: var(--subtext-color);
        }

        &:hover div img {
          transform: scale(1.06);
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

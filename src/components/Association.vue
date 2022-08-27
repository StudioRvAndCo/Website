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
            <img
              src="@/assets/img/members/default.webp"
              alt="Amandine"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Amandine</p>
        </div>
        <div>
          <div>
            <img
              src="@/assets/img/members/default.webp"
              alt="Baptiste"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Baptiste</p>
        </div>
        <div>
          <div>
            <img
              src="@/assets/img/members/bastien.webp"
              alt="Bastien"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Bastien</p>
        </div>
        <div>
          <div>
            <img
              src="@/assets/img/members/default.webp"
              alt="Corentin"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Corentin</p>
        </div>
        <div>
          <div>
            <img
              src="@/assets/img/members/default.webp"
              alt="Damian"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Damian</p>
        </div>
        <a href="https://www.youtube.com/channel/UCYl-DuOSdkMfsIbLmVPiPOA">
          <div>
            <img
              src="@/assets/img/members/florent.webp"
              alt="Florent"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Florent</p>
        </a>
        <div>
          <div>
            <img
              src="@/assets/img/members/joshua.webp"
              alt="Joshua"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Joshua</p>
        </div>
        <div>
          <div>
            <img
              src="@/assets/img/members/default.webp"
              alt="Lucas"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Lucas</p>
        </div>
        <div>
          <div>
            <img
              src="@/assets/img/members/mael.webp"
              alt="Maël"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Maël</p>
        </div>
        <a href="https://www.youtube.com/channel/UCznR2syShlluEzWRoD7XZRQ">
          <div>
            <img
              src="@/assets/img/members/mathis.webp"
              alt="Mathis"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Mathis</p>
        </a>
        <div>
          <div>
            <img
              src="@/assets/img/members/default.webp"
              alt="Maxence"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Maxence</p>
        </div>
        <div>
          <div>
            <img
              src="@/assets/img/members/default.webp"
              alt="Maxime"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Maxime</p>
        </div>
        <div>
          <div>
            <img
              src="@/assets/img/members/default.webp"
              alt="Quentin"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Quentin</p>
        </div>
        <a href="https://www.youtube.com/channel/UC9ZVyJocXPlUCiwggkHsmDg">
          <div>
            <img
              src="@/assets/img/members/thomas.webp"
              alt="Thomas"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Thomas</p>
        </a>
        <div>
          <div>
            <img
              src="@/assets/img/members/default.webp"
              alt="Tiffany"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <p>Tiffany</p>
        </div>
      </section>

      <hr v-if="posts" />

      <!-- Instagram posts -->
      <section v-if="posts">
        <a v-for="post in posts" :key="post.id" :href="post.permalink">
          <img
            v-if="
              post.media_type === 'IMAGE' ||
              post.media_type === 'CAROUSEL_ALBUM'
            "
            :src="post.media_url"
            alt="Instagram post"
            width="220"
            height="220"
            loading="lazy"
          />
          <img
            v-else
            :src="post.thumbnail_url"
            alt="Instagram post"
            width="220"
            height="220"
            loading="lazy"
          />
        </a>
      </section>

      <a
        v-if="posts"
        href="https://www.instagram.com/studiorvandco"
        class="btn"
      >
        {{ $t("association.more-pictures") }}
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: "AssociationComponent",
  props: ["posts"],
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
      flex-wrap: wrap;
      display: flex;
      justify-content: space-around;
      gap: 4rem;

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
            object-fit: cover;
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
      gap: 3rem;
      justify-content: space-evenly;
      flex-wrap: wrap;

      a {
        transform: scale(1);
        transition: transform 250ms;

        img {
          border-radius: var(--border-radius);
          width: 100%;
          max-width: 220px;
          aspect-ratio: 1/1;
          object-fit: cover;
          box-shadow: rgba(0, 0, 0, 0.15) 0 8px 16px 0;
        }

        &:hover {
          transform: scale(1.04);
        }
      }
    }
  }
}
</style>

<template>
  <article id="projects">
    <!-- Title -->
    <h2>{{ $t("projects.self") }}</h2>
    <Splide
      class="splide"
      :has-track="false"
      :options="options"
      :aria-label="$t('projects.self')"
    >
      <SplideTrack>
        <SplideSlide>
          <div>
            <h3>{{ $t("projects.les-chroniques.self") }}</h3>
            <p>{{ $t("projects.les-chroniques.description") }}</p>
            <a
              class="btn"
              href="https://www.youtube.com/watch?v=GuYfV7U6w8E&list=PLSBzstMGFp53S9n77CvdrQG132hMXSBBM"
              target="_blank"
              rel="noopener"
            >
              {{ $t("projects.view") }}
            </a>
          </div>
          <img
            src="@/assets/img/projects/les_chroniques.webp"
            :alt="$t('projects.les-chroniques.self')"
          />
        </SplideSlide>
        <SplideSlide>
          <div>
            <h3>{{ $t("projects.concert-polyband-2022.self") }}</h3>
            <p>{{ $t("projects.concert-polyband-2022.description") }}</p>
            <a
              class="btn"
              href="https://www.youtube.com/playlist?list=PLSBzstMGFp53nJ4RpcZImbOLHwMvDiJH4"
              target="_blank"
              rel="noopener"
            >
              {{ $t("projects.view") }}
            </a>
          </div>
          <img
            src="@/assets/img/projects/concert_polyband.webp"
            :alt="$t('projects.concert-polyband-2022.self')"
          />
        </SplideSlide>
      </SplideTrack>

      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </button>
        <button class="splide__arrow splide__arrow--next">
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </button>
      </div>

      <ul class="splide__pagination"></ul>
    </Splide>
  </article>
</template>

<script>
import { Splide, SplideTrack, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

export default {
  name: "ProjectsComponent",
  components: {
    Splide,
    SplideTrack,
    SplideSlide,
  },
  data() {
    return {
      DOM: {},
      options: {
        type: "loop",
        rewind: true,
        rewindByDrag: true,
        autoplay: false,
        keyboard: true,
        cover: true,
        heightRatio: 0.4,
        speed: 350,
        rewindSpeed: this.speed,
        easing: "cubic-bezier(0.25, 0, 0.25, 1)",
        interval: 7500,
      },
    };
  },
};
</script>

<style scoped lang="scss">
#projects {
  @include max-width(var(--max-width-content));
  @include full-width-background-color(var(--projects-bg-color));
  padding: var(--spacing) 0;

  .splide {
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 0 8px 16px 0;
    position: relative;

    .splide__slide {
      height: 330px !important;

      div {
        padding: 2rem 4rem;
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        justify-content: center;
        background: linear-gradient(
          35deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0) 70%
        );

        h3,
        p {
          text-shadow: 0 0 0.8em var(--bg-color), 0 0 0.2em var(--bg-color);
        }

        p {
          margin-bottom: 1.4rem;
        }
      }
    }

    .splide__arrow {
      height: 100%;
      border-radius: unset;
      color: var(--text-color);
      font-size: 1.2em;
      padding: 0 1rem;
      width: auto;
      transition: all 250ms;
    }

    .splide__arrow--prev {
      left: 0;
      background: rgb(0, 0, 0);
      background: -moz-linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(31, 38, 45, 0) 100%
      );
      background: -webkit-linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(31, 38, 45, 0) 100%
      );
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(31, 38, 45, 0) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#1f262d",GradientType=1);
    }

    .splide__arrow--next {
      right: 0;
      background: rgb(0, 0, 0);
      background: -moz-linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(31, 38, 45, 0) 100%
      );
      background: -webkit-linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(31, 38, 45, 0) 100%
      );
      background: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(31, 38, 45, 0) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#1f262d",GradientType=1);
    }

    .splide__pagination {
      gap: 0.5rem;
      bottom: 0.7rem;
    }
  }

  @media (max-width: 450px) {
    width: 100%;

    h2 {
      @include max-width(var(--max-width-content));
    }

    .splide {
      border-radius: unset;
    }
  }
}
</style>

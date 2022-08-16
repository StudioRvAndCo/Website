<template>
  <article id="projects">
    <!-- Title -->
    <h2>{{ $t("projects.self") }}</h2>
    <Splide :options="options" :aria-label="$t('projects.self')">
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
            Voir
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
            Voir
          </a>
        </div>
        <img
          src="@/assets/img/projects/concert_polyband.webp"
          :alt="$t('projects.concert-polyband-2022.self')"
        />
      </SplideSlide>
    </Splide>
  </article>
</template>

<script>
import "@splidejs/vue-splide/css";
export default {
  name: "ProjectsComponent",
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
        arrows: false,
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

    .splide__slide {
      height: 330px !important;

      div {
        padding: 4rem;
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

        p {
          margin-bottom: 1.4rem;
        }
      }
    }
  }
}
</style>

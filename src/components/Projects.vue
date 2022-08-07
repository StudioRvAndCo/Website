<template>
  <article>
    <!-- Title -->
    <h2>Projets annexes</h2>
    <Splide
      :options="options"
      :aria-label="$t('tournaments.self')"
      @splide:autoplay:play="updateDOM"
      @splide:autoplay:pause="updateDOM"
      @splide:active="updateDOM"
    >
      <SplideSlide>
        <div>
          <h3>Émission Les chroniques</h3>
          <p>Talkshow diffusé en direct sur Twitch.</p>
          <a
            class="btn"
            href="https://www.youtube.com/watch?v=GuYfV7U6w8E&list=PLSBzstMGFp53S9n77CvdrQG132hMXSBBM"
            target="_blank"
            rel="noopener"
            >Voir</a
          >
        </div>
        <img
          src="@/assets/img/projects/les_chroniques.webp"
          alt="Émission 'Les Chroniques'."
        />
      </SplideSlide>
      <SplideSlide>
        <div>
          <h3>Concert PolyBand</h3>
          <p>Captation vidéo et sonore du concert du 17 mars 2022.</p>
          <a
            class="btn"
            href="https://www.facebook.com/Polyband-BDA-Polytech-Grenoble-114697373596248/"
            target="_blank"
            rel="noopener"
            >Voir</a
          >
        </div>
        <img
          src="@/assets/img/projects/concert_polyband.webp"
          alt="Concert du groupe Polyband."
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
        autoplay: true,
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
  methods: {
    updateDOM() {
      this.DOM = document.getElementById("carousel").innerHTML;
    },
  },
  beforeUnmount() {
    document.getElementById("carousel").innerHTML = this.DOM;
  },
};
</script>

<style scoped lang="scss">
article {
  @include full-width-background-color(var(--projects-bg-color));
  padding: var(--spacing) 0;
}

.splide {
  // height: 100px;
  border-radius: var(--border-radius);

  .splide__slide {
    border-radius: var(--border-radius);
  }

  border: 1px solid red;
  //box-shadow: rgba(0, 0, 0, 0.15) 0 8px 16px 0;
}
</style>

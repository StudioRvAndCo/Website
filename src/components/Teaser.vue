<template>
  <article>
    <!-- Title -->
    <h2>{{ $t("teaser.catchphrase") }}</h2>
    <section>
      <!-- Teaser -->
      <video
        autoplay
        muted
        loop
        preload="none"
        poster="@/assets/img/thumbnail.webp"
      >
        <source src="@/assets/vid/teaser.mp4" type="video/mp4" />
      </video>

      <!-- Numbers -->
      <div>
        <h3>{{ $t("teaser.numbers") }}</h3>
        <div>
          <p><span>10</span> {{ $t("teaser.members") }}</p>
          <p><span>6</span> {{ $t("teaser.projects") }}</p>
          <p>
            <span v-if="statistics">{{ statistics.viewCount }}</span>
            <span v-else>0</span>
            {{ $t("teaser.views") }}
          </p>
          <p>
            <span v-if="statistics">{{ statistics.subscriberCount }}</span>
            <span v-else>0</span>
            {{ $t("teaser.subscribers") }}
          </p>
          <p>
            <span>{{ yearOld }}</span> {{ $t("teaser.year") }}
          </p>
        </div>
        <router-link to="/#association" class="btn">
          {{ $t("teaser.read-more") }}
        </router-link>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "TeaserComponent",
  props: ["statistics"],
  computed: {
    yearOld() {
      return Math.abs(
        new Date(Date.now() - new Date("2020-09-09")).getUTCFullYear() - 1970
      );
    },
  },
};
</script>

<style scoped lang="scss">
article {
  @include max-width(var(--max-width-content));
  padding: var(--spacing) 0;

  h2 {
    margin-bottom: calc(var(--spacing) / 2);
    font-size: 2.2em;
    font-weight: 800;
    text-shadow: 0 0 0.8em var(--bg-color), 0 0 0.2em var(--bg-color);

    &::before,
    &::after {
      content: none;
    }
  }

  section {
    display: grid;
    grid-template-columns: 1.7fr 0.7fr;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing);

    video {
      object-fit: cover;
      @include box-shadow;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
    }

    > div {
      height: 100%;
      box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%),
        0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);
      background-color: var(--bg-color);
      border-radius: var(--border-radius);
      padding: 1rem;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      h3 {
        text-align: center;
        font-size: 1.5em;
      }

      .btn {
        width: 100%;
      }

      > div {
        width: 100%;
        height: inherit;
        background-color: var(--projects-bg-color);
        border-radius: var(--border-radius);
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: space-between;
        gap: 0;

        p {
          width: inherit;
          padding: 0.8rem;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2em;
          gap: 8px;

          &::after {
            content: "";
            position: absolute;
            left: 2.2em;
            right: 2.2em;
            bottom: -1%;
            height: 2px;
            border-radius: var(--border-radius);
            background-color: rgba(255, 255, 255, 0.15);
          }

          &:last-of-type::after {
            content: none;
          }

          span {
            padding-bottom: 2px;
            font-size: 1.3em;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>

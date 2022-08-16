<template>
  <article id="productions">
    <!-- Title -->
    <h2>{{ $t("productions.self") }}</h2>
    <article>
      <!-- En Sursis -->
      <section>
        <img
          src="@/assets/img/productions/en_sursis.webp"
          :alt="$t('productions.en-sursis.self')"
        />
        <div>
          <h3>
            <span>{{ $t("productions.new") }}</span>
            {{ $t("productions.en-sursis.self") }}
          </h3>
          <p>{{ $t("productions.en-sursis.description") }}</p>
          <a href="https://www.youtube.com/watch?v=JVPWEmjVV7g" class="btn">
            Regarder
          </a>
        </div>
      </section>

      <!-- Un Chemin -->
      <section>
        <img
          src="@/assets/img/productions/un_chemin.webp"
          :alt="$t('productions.un-chemin.self')"
        />
        <div>
          <h3>{{ $t("productions.un-chemin.self") }}</h3>
          <p>{{ $t("productions.un-chemin.description") }}</p>
          <a href="https://www.youtube.com/watch?v=GXBSu6fq4Wc" class="btn">
            Regarder
          </a>
        </div>
      </section>

      <!-- Star Wars : Une quête de justice -->
      <section>
        <img
          src="@/assets/img/productions/star_wars_une_quete_de_justice.webp"
          :alt="$t('productions.star-wars-une-quete-de-justice.self')"
        />
        <div>
          <h3>{{ $t("productions.star-wars-une-quete-de-justice.self") }}</h3>
          <p>
            {{ $t("productions.star-wars-une-quete-de-justice.description") }}
          </p>
          <a href="https://www.youtube.com/watch?v=RAmWSDmg0so" class="btn">
            Regarder
          </a>
        </div>
      </section>

      <!-- Un été entre amis -->
      <section>
        <img
          src="@/assets/img/productions/un_ete_entre_amis.webp"
          :alt="$t('productions.un-ete-entre-amis.self')"
        />
        <div>
          <h3>{{ $t("productions.un-ete-entre-amis.self") }}</h3>
          <p>{{ $t("productions.un-ete-entre-amis.description") }}</p>
          <a
            href="https://www.youtube.com/playlist?list=PL6VuKkKwjE2EmFu61Pvn39yP5RvYVpIGB"
            class="btn"
          >
            Regarder
          </a>
        </div>
      </section>
    </article>
  </article>
</template>

<script>
export default {
  name: "ProductionsComponent",
};
</script>

<style scoped lang="scss">
#productions {
  @include max-width(var(--max-width-content));
  @include full-width-background-color(var(--bg-color));
  padding: var(--spacing) 0;

  > article {
    padding: 0;

    section {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: calc(var(--spacing) / 1.25);
      margin-bottom: var(--spacing);

      &:first-of-type {
        h3 {
          display: inline-flex;
          align-items: center;
          gap: 1rem;

          span {
            display: inline-block;
            background-color: var(--projects-bg-color);
            border-radius: var(--border-radius);
            padding: 0.4rem 0.6rem;
            font-size: 0.9em;
            font-weight: 600;
            box-shadow: rgb(0 0 0 / 0%) 0 0 0 0, rgb(0 0 0 / 0%) 0 0 0 0,
              rgb(0 0 0 / 10%) 0 4px 6px -1px, rgb(0 0 0 / 6%) 0 2px 4px -1px;
          }
        }

        img {
          max-height: 320px;
          height: 100%;
          max-width: 569px;
          width: 100%;
          aspect-ratio: 16/9;
        }
      }

      &:nth-of-type(2n) {
        flex-direction: row-reverse;
      }

      &:last-of-type {
        margin-bottom: 0;
      }

      img {
        height: 100%;
        max-height: 260px;
        width: 100%;
        max-width: 462px;
        border-radius: var(--border-radius);
        @include box-shadow;
      }

      div {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;

        h3 {
          font-size: 1.3em;
          font-weight: 600;
        }

        p {
          color: var(--subtext-color);
          margin-bottom: 1rem;
        }
      }

      @media (max-width: 940px) {
        flex-flow: column nowrap !important;
        text-align: center;
        gap: 2rem;
        margin-bottom: calc(var(--spacing) * 1.25);

        h3 {
          justify-content: center;
        }

        .btn {
          margin-inline: auto;
        }
      }
    }
  }
}
</style>

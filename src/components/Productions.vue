<template>
  <article id="productions">
    <!-- Title -->
    <h2>Nos productions</h2>
    <article>
      <!-- En Sursis -->
      <section>
        <img src="@/assets/img/productions/en_sursis.webp" alt="En Sursis" />
        <div>
          <h3><span>Nouveau</span> En Sursis</h3>
          <p>
            Grâce au jeune lieutenant Jules, le capitaine Patrick Corbier
            aperçoit enfin sa chance d'atteindre l'insaisissable Vincent, qu'il
            traque en solitaire depuis de nombreuses années.
          </p>
          <a href="https://www.youtube.com/watch?v=JVPWEmjVV7g" class="btn">
            Regarder
          </a>
        </div>
      </section>

      <!-- Un Chemin -->
      <section>
        <img src="@/assets/img/productions/un_chemin.webp" alt="Un Chemin" />
        <div>
          <h3>Un Chemin</h3>
          <p>
            Tandis que l'humanité est terrassée par une pandémie dévastatrice,
            deux amis tentent de survivre.
          </p>
          <a href="https://www.youtube.com/watch?v=GXBSu6fq4Wc" class="btn">
            Regarder
          </a>
        </div>
      </section>

      <!-- Star Wars : Une quête de justice -->
      <section>
        <img
          src="@/assets/img/productions/star_wars_une_quete_de_justice.webp"
          alt="Star Wars : Une quête de justice"
        />
        <div>
          <h3>Star Wars : Une quête de justice</h3>
          <p>
            La galaxie est déchirée par la guerre entre les Jedi et les Sith.
            Dans ce contexte mouvementé, la notion de justice est incertaine,
            chaque camp se l’appropriant pour servir ses intérêts. Mais certains
            n'hésitent pas à se dresser face à cet affrontement sans fin...
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
          alt="Un été entre amis"
        />
        <div>
          <h3>Un été entre amis</h3>
          <p>
            Trois amis s'apprêtent à profiter de vacances assez banales à la
            campagne. Mais des aventures bien plus palpitantes que prévu les
            attendent et leurs caractères aussi bien trempés que divergents ne
            vont pas arranger les choses...
          </p>
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
        }
      }

      &:nth-of-type(2n) {
        flex-direction: row-reverse;
      }

      &:last-of-type {
        margin-bottom: 0;
      }

      img {
        max-height: 260px;
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
    }
  }
}
</style>

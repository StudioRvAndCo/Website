<template>
  <main>
    <article>
      <h2>Ouais, on produit des trucs 😎</h2>
    </article>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped lang="scss">
@import "@/assets/mixin.scss";

main {
  background-image: url("../assets/img/background.webp");
  background-attachment: fixed;
  display: flex;
  flex-flow: column nowrap;
  gap: var(--spacing);

  article {
    @include max-width(var(--max-width-content));
  }
}
</style>

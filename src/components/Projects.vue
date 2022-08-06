<template>
  <article>
    <!-- Title -->
    <h2>Projets annexes</h2>
  </article>
</template>

<script>
export default {
  name: "ProductionsComponent",
};
</script>

<style scoped lang="scss">
article {
  @include full-width-background-color(var(--projects-bg-color));
  padding: var(--spacing) 0;
}
</style>

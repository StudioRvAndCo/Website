<template>
  <footer>
    <p>
      &copy; {{ currentYear }} &nbsp;|&nbsp;
      <a href="https://rvandco.fr" class="">RvAndCo.fr</a>
    </p>
    <p>
      Site Web créé par
      <a href="https://github.com/Minarox" target="_blank" rel="noopener">
        Minarox </a
      >.
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {
    currentYear() {
      return new Date().getFullYear().toString();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  @include full-width-background-color(var(--bg-color));
  @include max-width(var(--max-width-content));
  padding: 0.8rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: var(--subtext-color);

  a {
    transition: color 200ms;
    text-decoration: none;
    color: var(--subtext-color);

    &:hover {
      color: var(--text-color);
    }
  }

  p:last-of-type {
    justify-self: end;
  }
}
</style>

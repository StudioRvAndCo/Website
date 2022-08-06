<template>
  <main>
    <Teaser />
    <Productions />
  </main>
</template>

<script>
import Teaser from "@/components/Teaser";
import Productions from "@/components/Productions";

export default {
  name: "HomeView",
  components: {
    Teaser,
    Productions,
  },
};
</script>

<style scoped lang="scss">
main {
  background-image: url("../assets/img/background.webp");
  background-attachment: fixed;

  & > article {
    @include max-width(var(--max-width-content));
  }
}
</style>

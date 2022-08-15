<template>
  <main>
    <Teaser />
    <Productions />
    <Projects />
  </main>
</template>

<script>
import Teaser from "@/components/Teaser";
import Productions from "@/components/Productions";
import Projects from "@/components/Projects";

export default {
  name: "HomeView",
  components: {
    Teaser,
    Productions,
    Projects,
  },
};
</script>

<style scoped lang="scss">
main {
  background-image: url("../assets/img/background.webp");
  background-attachment: fixed;
}
</style>

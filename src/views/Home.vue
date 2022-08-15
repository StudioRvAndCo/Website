<template>
  <main>
    <Teaser />
    <Productions />
    <Projects />
    <Association />
  </main>
</template>

<script>
import Teaser from "@/components/Teaser";
import Productions from "@/components/Productions";
import Projects from "@/components/Projects";
import Association from "@/components/Association";

export default {
  name: "HomeView",
  components: {
    Teaser,
    Productions,
    Projects,
    Association,
  },
};
</script>

<style scoped lang="scss">
main {
  background-image: url("../assets/img/background.webp");
  background-attachment: fixed;
}
</style>

<template>
  <main>
    <Teaser
      :statistics="data.statistics"
      v-observe-visibility="{
        callback: teaser,
        intersection: {
          rootMargin: rootMargin,
        },
      }"
    />
    <Productions
      v-observe-visibility="{
        callback: productions,
        intersection: {
          rootMargin: rootMargin,
        },
      }"
    />
    <Projects
      v-observe-visibility="{
        callback: projects,
        intersection: {
          rootMargin: rootMargin,
        },
      }"
    />
    <Association
      :posts="data.posts"
      v-observe-visibility="{
        callback: association,
        intersection: {
          rootMargin: rootMargin,
        },
      }"
    />
    <Contact
      v-observe-visibility="{
        callback: contact,
        intersection: {
          rootMargin: rootMargin,
        },
      }"
    />
  </main>
</template>

<script>
import Teaser from "@/components/Teaser";
import Productions from "@/components/Productions";
import Projects from "@/components/Projects";
import Association from "@/components/Association";
import Contact from "@/components/Contact";

export default {
  name: "HomeView",
  data() {
    return {
      data: {},
      nav: {
        teaser: false,
        productions: false,
        projects: false,
        association: false,
        contact: false,
      },
      rootMargin: "-40%",
    };
  },
  components: {
    Teaser,
    Productions,
    Projects,
    Association,
    Contact,
  },
  methods: {
    teaser(visible) {
      this.nav.teaser = visible;
      this.updateNav();
    },
    productions(visible) {
      this.nav.productions = visible;
      this.updateNav();
    },
    projects(visible) {
      this.nav.projects = visible;
      this.updateNav();
    },
    association(visible) {
      this.nav.association = visible;
      this.updateNav();
    },
    contact(visible) {
      this.nav.contact = visible;
      this.updateNav();
    },
    updateNav() {
      if (this.nav.teaser) {
        this.$emit("nav", "home");
      } else if (this.nav.contact) {
        this.$emit("nav", "contact");
      } else if (this.nav.association) {
        this.$emit("nav", "association");
      } else if (this.nav.projects) {
        this.$emit("nav", "projects");
      } else if (this.nav.productions) {
        this.$emit("nav", "productions");
      } else {
        this.$emit("nav", "home");
      }
    },
  },
  async mounted() {
    let response = await fetch("https://api.minarox.fr/rvandco", {
      cache: "default",
    });
    this.data = await response.json();
    this.$emit("livestream", this.data.livestream);
  },
};
</script>

<style scoped lang="scss">
main {
  background-image: url("../assets/img/background.webp");
  background-attachment: fixed;
}
</style>

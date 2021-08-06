<template>
  <article id="home">
    <Presentation />
    <Productions />
    <Association />
    <Contact />
  </article>
</template>

<script>
import Presentation from "@/components/Presentation";
import Productions from "@/components/Productions";
import Association from "@/components/Association";
import Contact from "@/components/Contact";

export default {
  name: 'Home',
  components: {
    Presentation,
    Productions,
    Association,
    Contact
  },
  methods: {
    goto(url) {
      window.location = url;
    }
  }
}
</script>
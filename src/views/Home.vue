<template>
  <Presentation />
  <Productions />
  <Association />
  <Contact />
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
  }
}
</script>
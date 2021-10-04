<template>
  <presentation />
  <productions @even="this.change_color = true" />
  <association :color="change_color" />
  <contact />
</template>

<script>
import presentation from "@/components/home/presentation";
import productions from "@/components/home/productions";
import association from "@/components/home/association";
import contact from "@/components/home/contact";

export default {
  name: 'Home',
  data() {
    return {
      change_color: false
    }
  },
  components: {
    presentation,
    productions,
    association,
    contact
  }
}
</script>
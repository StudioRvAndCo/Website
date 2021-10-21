<template>
  <!-- Import components -->
  <introduction />
  <productions @even="this.change_color = true" />
  <association :color="change_color" />
  <contact />
</template>

<script>
import introduction from "@/components/home/introduction";
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
    introduction,
    productions,
    association,
    contact
  }
}
</script>
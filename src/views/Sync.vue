<template>
  <article id="sync">
    <p>Route : {{ target }}</p>
    <p>Channel : {{ channel }}</p>
    <p>Channel : {{ channelSections }}</p>
  </article>
</template>

<script>
export default {
  name: 'Sync',
  data() {
    return {
      target: this.$route.params.target,
      channel: null,
      channelSections: null,
    }
  },
  created() {
    // Channel
    fetch("https://youtube.googleapis.com/youtube/v3/channels" +
        "?part=id%2Csnippet%2Cstatistics%2CbrandingSettings" +
        "&id=UCbTaxj24z8viOFR6NXMKurQ" +
        "&fields=items" +
        "&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk", {
      method: "GET",
      headers: { Accept: "application/json" }
    }).then(res => res.json())
        .then(response => {
          this.channel = response;
        });
    // Channel Sections
    fetch("https://youtube.googleapis.com/youtube/v3/channelSections" +
        "?part=contentDetails" +
        "&channelId=UCbTaxj24z8viOFR6NXMKurQ" +
        "&key=AIzaSyCLWuAoSdikH2e-fgBIykXy5hWhJSJBPDk", {
      method: "GET",
      headers: { Accept: "application/json" }
    }).then(res => res.json())
        .then(response => {
          this.channelSections = response;
        });
  }
}
</script>

<style scoped>
#sync {
  margin: 50px 12vw 50px;
}
</style>
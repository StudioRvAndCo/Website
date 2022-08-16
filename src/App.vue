<template>
  <Header :nav="position" />

  <router-view />

  <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  data() {
    return {
      position: "home",
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");

:root {
  --bg-color: #393939;
  --projects-bg-color: #555555;
  --association-bg-color: #612626;

  --text-color: #ffffff;
  --subtext-color: #dfdfdf;

  --btn-color: #be0000;

  --max-width-content: 1200px;
  --max-width-header: 1450px;
  --spacing: 3.6rem;
  --border-radius: 8px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 14px 14px white;
  border: solid 4px transparent;
  border-radius: 14px;
}

::-webkit-scrollbar-button {
  display: none;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  scroll-behavior: smooth;
  overflow: overlay;
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: var(--text-color);
  background-color: var(--bg-color);

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }

  h2 {
    width: min(100%, 1120px);
    margin-inline: auto;
    margin-bottom: calc(var(--spacing) / 1.25);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    font-size: 1.6em;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 0 0.8em rgba(0, 0, 0, 0.1), 0 0 0.2em rgba(0, 0, 0, 0.1);

    &::before,
    &::after {
      border-top: 0.08em solid;
      content: "";
      flex: 1;
      border-radius: var(--border-radius);
    }
  }
}

.btn {
  display: inline-block;
  width: 270px;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: 600;
  text-align: center;
  text-decoration: none !important;
  line-height: 2.18em;
  cursor: pointer;
  color: var(--primary-text);
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
    rgba(0, 0, 0, 0.1) 0 4px 6px -1px, rgba(0, 0, 0, 0.06) 0 2px 4px -1px;
  background-color: var(--btn-color);
  transition: background-color 0.15s;

  &:hover {
    background-color: rgb(156, 0, 0);
  }

  @media (max-width: 450px) {
    width: 100%;
  }
}
</style>

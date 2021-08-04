<template>
  <header id="navbar">
    <img alt="Rv And Co Logo" src="@/assets/Logo.png" @click="goto('/')">
    <nav>
      <router-link :to="{name: 'home'}">{{ $t('home') }}</router-link>
      <router-link :to="{name: 'home', hash: '#productions'}">{{ $t('productions') }}</router-link>
      <router-link :to="{name: 'home', hash: '#association'}">{{ $t('association') }}</router-link>
      <router-link :to="{name: 'home', hash: '#contact'}">{{ $t('contact') }}</router-link>
    </nav>
    <section>
      <!-- Youtube -->
      <a href="https://www.youtube.com/channel/UCbTaxj24z8viOFR6NXMKurQ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.412064 50">
          <path fill="#fff" d="M35.7 0S13.36 0 7.78 1.47c-3 .82-5.48 3.3-6.3 6.35C0 13.42 0 25 0 25s0 11.65 1.47 17.18a8.95 8.95 0 006.3 6.3C13.4 50 35.7 50 35.7 50s22.35 0 27.94-1.47a8.95 8.95 0 006.3-6.3c1.46-5.58 1.46-17.17 1.46-17.17s.06-11.65-1.47-17.24a8.95 8.95 0 00-6.3-6.3C58.07 0 35.72 0 35.72 0zM28.6 14.3L47.18 25l-18.6 10.7V14.3z" />
        </svg>
      </a>
      <!-- Twitter -->
      <a href="https://twitter.com/studiorvandco">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="#fff" d="M24 4.56c-.88.39-1.83.65-2.83.77a4.93 4.93 0 002.17-2.72c-.95.56-2 .97-3.13 1.2a4.92 4.92 0 00-8.4 4.48C7.74 8.1 4.1 6.13 1.68 3.15A4.93 4.93 0 003.2 9.72a4.9 4.9 0 01-2.23-.61A4.93 4.93 0 004.91 14c-.69.18-1.45.23-2.22.08a4.93 4.93 0 004.6 3.42A9.9 9.9 0 010 19.54a13.94 13.94 0 007.55 2.21c9.14 0 14.3-7.72 14-14.64.95-.7 1.79-1.57 2.45-2.55z" />
        </svg>
      </a>
      <!-- Instagram -->
      <a href="https://www.instagram.com/studiorvandco">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path fill="#fff" d="M128 23.06c34.18 0 38.23.13 51.72.75 12.48.57 19.26 2.65 23.77 4.4a39.66 39.66 0 0114.72 9.58 39.66 39.66 0 019.57 14.72c1.76 4.51 3.84 11.29 4.41 23.77.62 13.5.75 17.54.75 51.72s-.13 38.23-.75 51.72c-.57 12.48-2.65 19.26-4.4 23.77a39.66 39.66 0 01-9.58 14.72 39.66 39.66 0 01-14.72 9.57c-4.51 1.76-11.29 3.84-23.77 4.41-13.5.62-17.54.75-51.72.75s-38.23-.13-51.72-.75c-12.48-.57-19.26-2.65-23.77-4.4a39.65 39.65 0 01-14.72-9.58 39.66 39.66 0 01-9.57-14.72c-1.76-4.51-3.84-11.29-4.41-23.77-.62-13.5-.75-17.54-.75-51.72s.13-38.23.75-51.72c.57-12.48 2.65-19.26 4.4-23.77a39.66 39.66 0 019.58-14.72 39.66 39.66 0 0114.72-9.57c4.51-1.76 11.29-3.84 23.77-4.41 13.5-.62 17.54-.75 51.72-.75M128 0C93.24 0 88.88.15 75.23.77 61.6 1.39 52.3 3.56 44.15 6.72a62.74 62.74 0 00-22.67 14.76A62.74 62.74 0 006.72 44.16C3.56 52.3 1.39 61.6.77 75.23.15 88.88 0 93.23 0 128c0 34.76.15 39.12.77 52.77.62 13.63 2.79 22.93 5.95 31.08a62.75 62.75 0 0014.76 22.67 62.74 62.74 0 0022.67 14.76c8.15 3.16 17.45 5.33 31.08 5.95 13.65.62 18 .77 52.77.77 34.76 0 39.12-.15 52.77-.77 13.63-.62 22.93-2.79 31.07-5.95a62.74 62.74 0 0022.68-14.76 62.74 62.74 0 0014.76-22.67c3.16-8.15 5.33-17.45 5.95-31.08.62-13.65.77-18 .77-52.77 0-34.76-.15-39.12-.77-52.77-.62-13.63-2.79-22.93-5.95-31.07a62.74 62.74 0 00-14.76-22.68 62.74 62.74 0 00-22.68-14.76C203.7 3.56 194.4 1.39 180.77.77 167.12.15 162.77 0 128 0zm0 62.27a65.73 65.73 0 100 131.46 65.73 65.73 0 000-131.46zm0 108.4a42.67 42.67 0 110-85.34 42.67 42.67 0 010 85.34zm83.69-111a15.36 15.36 0 11-30.72 0 15.36 15.36 0 0130.72 0z" />
        </svg>
      </a>
    </section>
  </header>

  <router-view />

  <footer id="footer">
    <p id="copyright">&copy; {{ currentYear }} &nbsp;|&nbsp; <a href="/">RvandCo.fr</a></p>
    <p>Site Web créé par <a href="https://github.com/Minarox">Minarox</a>.</p>
  </footer>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goto(url) {
      window.location = url;
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
}
</script>

<style>
/* TODO: Add animations
   TODO: Add Hamburger menu for mobile users
   TODO: Script for APIs with crontab
   TODO: Add max-width for very large screens */

:root {
  --background-color: #393939;
  --background-nav: rgba(57, 57, 57, .8);
  --container: #606060;
  --alt-container: rgba(190, 0, 0, 0.23);
  --primary-text: white;
  --secondary-text: #cdcdcd;
  --primary-btn: #BE0000;
  --secondary-btn: var(--container);
  --tertiary-btn: var(--background-color);
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  color: var(--primary-text);
  overflow: overlay;
  scroll-behavior: smooth;
}

#navbar {
  z-index: 1000;
  padding: 0 12vw;
  height: 70px;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-nav);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 1px rgba(0,0,0,0.11),
    0 2px 2px rgba(0,0,0,0.11),
    0 4px 4px rgba(0,0,0,0.11),
    0 6px 8px rgba(0,0,0,0.11),
    0 8px 16px rgba(0,0,0,0.11);
}

#navbar img:first-child {
  width: 46px;
  height: 46px;
  cursor: pointer;
}

#navbar nav a {
  margin: 0 18px;
  font-size: 1.2em;
  font-weight: bold;
  color: var(--primary-text);
  text-decoration: none;
  text-transform: uppercase;
  transition: color .2s;
}

#navbar nav a:hover {
  color: var(--secondary-text);
  transition: color .2s;
}

#navbar section {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0 26px;
}

#navbar section a {
  height: 22px;
}

#navbar section a svg {
  width: auto;
  height: 22px;
  filter: brightness(100%);
  transition: filter .2s;
}

#navbar section a svg:hover {
  filter: brightness(70%);
  transition: filter .2s;
}

.btn {
  width: 270px;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--primary-text);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);
}

.primary-btn {
  background-color: var(--primary-btn);
  transition: background-color .2s;
}

.secondary-btn {
  background-color: var(--secondary-btn);
  transition: background-color .2s;
}

.tertiary-btn {
  background-color: var(--tertiary-btn);
  transition: background-color .2s;
}

.primary-btn:hover {
  background-color: rgb(156, 0, 0);
  transition: background-color .2s;
}

.secondary-btn:hover {
  background-color: rgb(76, 76, 76);
  transition: background-color .2s;
}

.tertiary-btn:hover {
  background-color: rgb(36, 36, 36);
  transition: background-color .2s;
}

#footer {
  padding: 14px 12vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  color: var(--secondary-text) !important;
  font-size: .86em !important;
}

#footer p {
  margin: 0;
}

#footer a {
  color: var(--secondary-text);
  text-decoration: none !important;
  transition: color .15s;
}

#footer a:hover {
  color: var(--primary-text);
  transition: color .15s;
}

::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 14px 14px var(--primary-text);
  border: solid 4px transparent;
  border-radius: 14px;
}

::-webkit-scrollbar-button {
  display: none;
}

@media screen and (max-width: 1200px) {
  #navbar {
    padding: 0 3vw;
  }
}

@media screen and (max-width: 900px) {
  #navbar section {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  #navbar nav {
    display: none;
  }

  #footer {
    padding: 14px 3vw;
  }
}

@media screen and (max-width: 400px) {
  #footer {
    flex-flow: column nowrap;
    gap: 10px 0;
  }
}
</style>

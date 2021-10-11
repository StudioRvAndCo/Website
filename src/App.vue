<template>
  <div id="navbar">
    <header>
      <article>
        <!-- Logo -->
        <router-link to="/" id="logo">
          <img alt="Rv And Co Logo" src="@/assets/Logo.png">
        </router-link>
        <!-- Links for Phone -->
        <a id="mobile_menu" @click.prevent="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#fff" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
            </path>
          </svg>
        </a>
        <section id="nav_mobile_menu" @click="toggleMenu">
          <router-link tabindex="-1" to="/">{{ $t('home') }}</router-link>
          <router-link tabindex="-1" to="/#productions">{{ $t('productions') }}</router-link>
          <router-link tabindex="-1" to="/#association">{{ $t('association') }}</router-link>
          <router-link tabindex="-1" to="/#contact">{{ $t('contact') }}</router-link>
        </section>
        <!-- Links for PC -->
        <nav>
          <router-link to="/">{{ $t('home') }}</router-link>
          <router-link to="/#productions">{{ $t('productions') }}</router-link>
          <router-link to="/#association">{{ $t('association') }}</router-link>
          <router-link to="/#contact">{{ $t('contact') }}</router-link>
        </nav>
      </article>
      <!-- Social -->
      <article>
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
      </article>
    </header>
  </div>

  <router-view />

  <footer>
    <p>&copy; {{ currentYear }} &nbsp;|&nbsp; <router-link to="/">RvandCo.fr</router-link></p>
    <p>Site Web créé par <a href="https://github.com/Minarox">Minarox</a>.</p>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      toggle: false
    }
  },
  methods: {
    toggleMenu() {
      let nav = document.getElementById('nav_mobile_menu');
      if (this.toggle) {
        nav.style.maxHeight = '0';
        nav.style.clipPath = 'inset(0 0 252px 0)';
      } else {
        nav.style.maxHeight = '252px';
        nav.style.clipPath = 'inset(0 0 0 0)';
      }
      this.toggle = !this.toggle;
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
}
</script>

<style scoped>
#navbar {
  z-index: 100000;
  height: 64px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--background-nav);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 1px rgba(0,0,0,0.11),
    0 2px 2px rgba(0,0,0,0.11),
    0 4px 4px rgba(0,0,0,0.11),
    0 6px 8px rgba(0,0,0,0.11),
    0 8px 16px rgba(0,0,0,0.11);
}

#navbar header {
  margin: 0 auto;
  padding: 0 12px;
  max-width: 1420px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

#logo, #logo * {
  width: 46px;
  height: 46px;
}

#navbar #mobile_menu {
  display: none;
  cursor: pointer;
}

#navbar article:first-of-type a svg {
  padding: 18px;
  width: auto;
  height: 26px;
  color: var(--primary-text);
  filter: brightness(100%);
  transition: filter .15s;
}

#navbar #nav_mobile_menu {
  max-height: 0;
  clip-path: inset(0 0 252px 0);
  width: 100%;
  position: absolute;
  top: 64px;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: rgba(57, 57, 57, 0.96);
  transition: max-height .3s linear, clip-path .3s linear;
}

#navbar #nav_mobile_menu a {
  width: calc(100% - 84px);
  text-align: center;
  padding: 18px;
  font-size: 1.4em;
  color: white;
  text-decoration: none;
  transform: scale(1);
  transition: transform .15s;
}

#navbar #nav_mobile_menu a:hover {
  padding: 18px;
  font-size: 1.4em;
  color: white;
  text-decoration: none;
  transform: scale(1.1);
  transition: transform .15s;
}

#navbar nav a {
  padding: 18px;
  font-size: 1.1em;
  font-weight: 600;
  color: var(--primary-text);
  text-decoration: none;
  transition: color .15s;
}

#navbar nav a:hover {
  color: var(--secondary-text);
  transition: color .15s;
}

#navbar article {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

#navbar article:last-of-type a svg {
  display: block;
  padding: 16px;
  width: auto;
  height: 18px;
  filter: brightness(100%);
  transition: filter .15s;
}

#navbar article a svg:hover {
  filter: brightness(70%);
  transition: filter .15s;
}

footer {
  margin: 0 auto;
  padding: 12px;
  max-width: 1420px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  color: var(--secondary-text) !important;
  font-size: .9em;
  font-weight: 300;
}

footer p {
  margin: 0;
}

footer a {
  color: var(--secondary-text);
  text-decoration: none !important;
  transition: color .15s;
}

footer a:hover {
  color: var(--primary-text);
  transition: color .15s;
}


@media screen and (max-width: 750px) {
  #navbar header article:last-of-type {
    display: none;
  }
}

@media screen and (max-width: 550px) {
  #navbar header {
    padding-right: 0;
  }

  #navbar nav {
    display: none;
  }

  #navbar article:first-of-type {
    width: 100%;
    justify-content: space-between;
  }

  #navbar #mobile_menu {
    display: block;
  }
}

@media screen and (max-width: 400px) {
  footer {
    flex-direction: column;
    gap: 12px 0;
  }
}
</style>

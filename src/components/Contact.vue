<template>
  <div id="contact">
    <h2>{{ $t('contact_us') }}</h2>

    <article>
      <section>
        <div>
          <h3>{{ $t('by_phone') }}</h3>
          <p>(+33)6 00 00 00 00</p>
        </div>
        <div>
          <h3>{{ $t('by_postal') }}</h3>
          <p>
            000, Avenue de Lorem Ipsum<br>
            00000 Ipsum City, France
          </p>
        </div>
        <div>
          <h3>{{ $t('on_twitter') }}</h3>
          <a href="https://twitter.com/studiorvandco">@StudioRvAndCo</a>
        </div>
        <div>
          <h3>{{ $t('on_instagram') }}</h3>
          <a href="https://www.instagram.com/studiorvandco">@StudioRvAndCo</a>
        </div>
      </section>
      <p id="separator">{{ $t('or') }}</p>
      <form>
        <label for="name">{{ $t('your_name') }}</label>
        <input type="text" name="name" id="name" required autocomplete="name">
        <label for="email">{{ $t('your_email') }}</label>
        <input type="text" name="email" id="email" required autocomplete="email">
        <label for="object">{{ $t('subject_request') }}</label>
        <input type="text" name="object" id="object">
        <label for="message">{{ $t('your_message') }}</label>
        <textarea name="message" id="message" required></textarea>
        <button class="btn primary-btn" type="submit">{{ $t('submit') }}</button>
      </form>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  // TODO: Send email with form
}
</script>

<style scoped>
#contact {
  padding: 50px 0;
  background-color: var(--container);
}

h2::before {
  border-top: .0625em solid;
  content: "";
  flex: 1;
  margin: 0 16px 0 .1em;
}

h2 {
  margin: 0 12vw 30px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 2em;
  text-transform: uppercase;
}

h2::after {
  border-top: .0625em solid;
  content: "";
  flex: 1;
  margin: 0 .1em 0 16px;
}

article {
  margin: 0 15vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 0 20px;
}

article section {
  width: 25%;
  min-width: 251px;
}

article section, article form {
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 16px;
}

#separator {
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.6em;
}

article section {
  display: flex;
  flex-flow: column nowrap;
  gap: 30px 0;
}

article section div h3 {
  margin: 0 0 6px;
  font-weight: bold;
  font-size: 1.3em;
}

article section div p, article section div a {
  color: var(--primary-text) !important;
  text-decoration: none !important;
  font-weight: normal;
  font-size: 1.2em;
  margin: 0;
  display: inline-block;
}

form {
  width: 65%;
}

form label {
  font-weight: bold;
  font-size: 1.3em;
  margin: 0 0 6px;
}

form input, form textarea {
  margin: 0 0 12px;
  border-radius: 6px;
  font-size: 1.2em;
  padding: 6px;
  border: none;
}

/* TODO: Change scrollbar */
form textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 120px;
  resize: vertical;
}

form button {
  margin-top: 4px;
  width: 100%;
}

@media screen and (max-width: 900px) {
  article {
    flex-flow: column nowrap;
    gap: 20px 0;
  }

  article section {
    width: 100%;
    flex-flow: row wrap;
  }

  article section > div {
    flex: 50%;
    margin: 0;
  }

  article form {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  h2 {
    margin: 0 3vw 30px;
  }

  article {
    margin: 0 6vw;
  }
}

@media screen and (max-width: 500px) {
  article section > div {
    flex: 100%;
  }

  article section {
    flex-flow: column wrap;
  }
}
</style>

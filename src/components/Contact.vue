<template>
  <div id="contact">
    <svg id="separator" xmlns="http://www.w3.org/2000/svg" width="1920" height="85.052" viewBox="0 0 1920 85.052">
      <path id="Tracé_18" d="M0,69l40-4.2C80,60.7,160,52.3,240,54S400,67.3,480,72.8a1602.357,1602.357,0,0,0,240-1.6c80-6.5,160-18.9,240-24.4s160-4.1,240,2C1280,55,1360,66,1440,67s160-8,240-10.5S1840,58,1880,60l40,2V0H0Z" fill="#635251"/>
      <path id="Tracé_19" d="M0,32l40-.2c40-.1,120-.5,200,2.2s160,8.3,240,13.5S640,57.3,720,57s160-5.7,240-8.2,160-2.1,240-4.8,160-8.3,240-10.3,160-.4,240,3.1,160,8.9,200,11.5l40,2.7V0H0Z" fill="#644442"/>
      <path id="Tracé_20" d="M0,22l40,.7c40,.6,120,2,200,5.5s160,9.1,240,8.6,160-7.1,240-7c80,.2,160,7.2,240,6.9,80-.4,160-8,240-10.7s160-.3,240,.3c80,.7,160-.3,240-.1,80,.1,160,1.5,200,2.1l40,.7V0H0Z" fill="#633634"/>
      <path id="Tracé_21" d="M0,25l40-2.2c40-2.1,120-6.5,200-9s160-3.1,240-.5c80,2.7,160,8.7,240,9,80,.4,160-5,240-5.6,80-.7,160,3.3,240,3.1,80-.1,160-4.5,240-5.1,80-.7,160,2.3,240,4.5,80,2.1,160,3.5,200,4.1l40,.7V0H0Z" fill="#612626"/>
    </svg>

    <h2 class="super_title">{{ $t('contact_us') }}</h2>

    <article>
      <section>
        <div>
          <h3>{{ $t('by_phone') }}</h3>
          <p>(+33)6 00 00 00 00</p>
        </div>
        <div>
          <h3>{{ $t('by_postal') }}</h3>
          <p>
            4 Lotissement Cantalause<br>
            31450 Montgiscard, France
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

      <p id="separator_contact">{{ $t('or') }}</p>

      <form>
        <label for="name">{{ $t('your_name') }}</label>
        <input type="text" name="name" id="name" required autocomplete="name">
        <label for="email">{{ $t('your_email') }}</label>
        <input type="text" name="email" id="email" required autocomplete="email">
        <label for="object">{{ $t('subject_request') }}</label>
        <input type="text" name="object" id="object">
        <label>{{ $t('your_message') }}</label>
        <textarea name="message" required></textarea>
        <button class="btn primary-btn" type="submit">{{ $t('submit') }}</button>
      </form>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    // TODO: Send email with form
  }
}
</script>

<style scoped>
#contact {
  background-color: var(--container);
}

.super_title {
  padding: 10px 0 30px;
}

article {
  margin: 0 auto;
  padding: 0 12px 30px;
  max-width: 1120px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

article section {
  width: 30%;
  min-width: 250px;
  display: flex;
  flex-flow: column nowrap;
  gap: 30px 0;
}

article section div h3, form label {
  margin: 0 0 6px;
  font-size: 1.3em;
  font-weight: 600;
}

article section div p, article section div a {
  color: var(--primary-text) !important;
  text-decoration: none !important;
  font-size: 1.1em;
  font-weight: 300;
  margin: 0;
  display: inline-block;
}

article section, article form {
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 20px;
}

#separator_contact {
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.5em;
}

form {
  width: 52%;
}

form input, form textarea {
  margin: 0 0 12px;
  border-radius: 6px;
  padding: 8px;
  font-size: 1em;
  border: none;
}

/* TODO: Change scrollbar */
form textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100px;
  resize: vertical;
}

form button {
  margin-top: 4px;
  width: 100%;
}

@media screen and (max-width: 880px) {
  article {
    flex-flow: column nowrap;
    gap: 20px 0;
  }

  article section {
    width: calc(100% - 20px * 2);
    flex-flow: row wrap;
  }

  article section > div {
    flex: 50%;
  }

  article form {
    width: calc(100% - 20px * 2);
  }
}

@media screen and (max-width: 520px) {
  article section > div {
    flex: 100%;
  }
}
</style>

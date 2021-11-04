import { createI18n } from 'vue-i18n/index'

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
    }
  })
  return messages
}

let language = '';
switch (navigator.language) {
  case 'fr':
    language = 'fr';
    break;
  case 'fr-FR':
    language = 'fr';
    break;
  default:
    language = "en-US"
    break;
}

export default createI18n({
  locale: language || 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})
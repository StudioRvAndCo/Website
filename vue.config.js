const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    i18n: {
      locale: "fr",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_mixin.scss";
        `,
      },
    },
  },
});

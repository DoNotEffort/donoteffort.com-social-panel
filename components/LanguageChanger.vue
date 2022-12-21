<template>
  <div data-cy="language-changer">
    <span
      v-for="language in languages"
      :key="language"
      :class="language == lang ? 'selected' : ''"
      @click="changeLanguage(language)"
      >{{ language }}</span
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      lang: this.$i18n.locale,
      languages: this.$i18n.locales.map((k) => k.code),
    };
  },

  methods: {
    changeLanguage(lang) {
      this.lang = lang;
      this.$i18n.setLocale(lang);
      // location.reload();
    },
  },
};
</script>
<style scoped>
div {
  position: absolute;
  right: 20px;
  top: 20px;
  color: white;
  z-index: 9999;
}

span {
  text-transform: uppercase;
  cursor: default;
}

span:not(.selected) {
  cursor: pointer;
}

span:not(:last-of-type)::after {
  content: " | ";
}

.selected {
  color: orangered;
}
</style>
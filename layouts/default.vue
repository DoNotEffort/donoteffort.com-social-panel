<template>
  <div v-if="!checkMaintenance">
    <panel-app-container>
      <theme-changer />
      <check-offline />
      <Nuxt />
    </panel-app-container>
  </div>
  <div v-else-if="user" class="maintenance">
    {{ $t('maintenance', { name: user.first_name }) }}
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      user: null,
    }
  },
  head() {
    return this.$nuxtI18nHead !== null
      ? this.$nuxtI18nHead({ addSeoAttributes: true })
      : {}
  },
  computed: {
    ...mapGetters({
      getUser: 'authentication/getUser',
    }),
    checkMaintenance() {
      return process.env.MAINTENANCE
    },
  },
  created() {
    this.user = this.getUser
  },
}
</script>
<style>
#theme-changer {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 999;
  cursor: pointer;
}

.maintenance {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 20px);
}
</style>

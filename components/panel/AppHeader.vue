<template>
  <div class="panel-header">
    <panel-app-header-items :items="items" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: this.$t('panel.header.accounts'),
          icon: 'accounts.svg',
          path: '/accounts',
        },
        {
          title: this.$t('panel.header.groups'),
          icon: 'groups.svg',
          path: '/groups',
        },
        {
          title: this.$t('panel.header.settings'),
          icon: 'settings.svg',
          path: '/settings',
        },
        {
          title: this.$t('panel.header.settings'),
          icon: 'settings.svg',
          path: '/settings',
        },
        {
          title: this.$t('panel.header.settings'),
          icon: 'settings.svg',
          path: '/settings',
        },
        {
          title: this.$t('panel.header.settings'),
          icon: 'settings.svg',
          path: '/settings',
        },
        {
          title: this.$t('panel.header.settings'),
          icon: 'settings.svg',
          path: '/settings',
        },
        {
          title: this.$t('panel.header.settings'),
          icon: 'settings.svg',
          path: '/settings',
        },
        {
          title: this.$t('panel.header.settings'),
          icon: 'settings.svg',
          path: '/settings',
        },
        {
          title: this.$t('panel.header.settings'),
          icon: 'settings.svg',
          path: '/settings',
        },
        {
          title: this.$t('panel.header.settings'),
          icon: 'settings.svg',
          path: '/settings',
        },
        {
          title: this.$t('panel.header.settings'),
          icon: 'settings.svg',
          path: '/settings',
        },
        {
          title: this.$t('panel.header.logout'),
          icon: 'logout.svg',
          path: '/logout',
          selectable: false,
          click: () => {
            this.$store.dispatch('auth/logout')
          },
        },
      ],
    }
  },
}
</script>
<style>
.panel-header {
  padding: 1rem 0;
  width: 5rem;
  margin-right: 2rem;
  border-radius: 50px;
  overflow-x: hidden;
  overflow-y: scroll;
}

@media only screen and (max-width: 768px) {
  .panel-header {
  padding:   1rem;
    display: flex;
    width: 90%;
    margin: 0 5%;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  /* .panel-header::-webkit-scrollbar {
		display: none;
	} */
}
</style>

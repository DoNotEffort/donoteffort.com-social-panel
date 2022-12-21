<template>
  <div id="theme-changer" data-cy="theme-changer"  @click="changeTheme">
    <dark-icon v-if="$colorMode.value == 'dark'" />
    <light-icon v-else />
  </div>
</template>

<script>
import darkIcon from '~/static/assets/images/theme-changer/dark.svg?inline'
import lightIcon from '~/static/assets/images/theme-changer/light.svg?inline'

export default {
  name: 'ThemeChanger',
  components: {
    darkIcon,
    lightIcon,
  },
  methods: {
    changeTheme() {
      this.$colorMode.preference =
        this.$colorMode.value === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>

<style>
/* body {
  background-color: #fff;
  color: #000c;
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
} */

#theme-changer svg{
	fill: white;
	height: 30px;
	width: 30px;
}

.light-mode #theme-changer svg{
	fill: #71717a;
}

</style>

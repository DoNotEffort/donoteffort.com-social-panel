<template>
  <div style="display:contents">
    <panel-app-header-item
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :class="{
        active:
          active === index && (!('selectable' in item) || item.selectable),
      }"
      @click.native="changeActive(index)"
    />
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    changeActive(index) {
      this.active = index
    },
  },
}
</script>

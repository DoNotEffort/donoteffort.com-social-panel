<template>
  <nuxt-link :to="item.path" class="panel-item bg-st">
    <div class="svg-container" v-html="getIcon"></div>
    <span class="text">{{ item.title }}</span>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getIcon() {
      return require(`~/static/assets/icons/panel/${this.item.icon}?raw`)
    },
  },
}
</script>
<style>
.panel-item svg {
  width: 1.5rem;
	height: 1.5rem;
}
</style>

<style scoped>
span {
  display: block;
  transform: rotate(-90deg);
}

.svg-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.panel-item {
  margin: auto;
  margin-bottom: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  flex-direction: column;
  transition: all 0.3s;
  color: white;
  text-decoration: none;
  justify-content: center;
}

.panel-item.active {
  height: 20rem;
  border-radius: 30px;
  padding-bottom: 3rem;
  padding-top: 1rem;
  justify-content: space-between;
}

.panel-item .text {
  display: none;
}

.panel-item.active .text {
  display: block;
}




@media only screen and (max-width: 768px) {
  .panel-item {
    flex-direction: row;
		padding: 0.5rem;
    width: 40px;
    height: 40px;
		margin: 0;
  }

  .panel-item.active {
    height: 2rem;
    width: 10rem;
    padding: 0.5rem;
  }


  span {
    transform: rotate(0deg);
  }
	
}
</style>

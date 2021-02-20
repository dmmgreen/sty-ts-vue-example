<template>
  <div :class="[{'is-active': isActive}]" @click="toggleClick">
    <svg-icon name="hamburger" width="20" height="20"></svg-icon>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'Hamburger'
})
export default class extends Vue {
  @Prop({ default: false }) private isActive!: boolean

  private toggleClick() {
    this.$emit('toggle-click')
  }
}
</script>

<style lang="scss" scoped>
.svg-icon{
  vertical-align: middle;
}
.is-active {
  transform: rotate(180deg);
}
</style>

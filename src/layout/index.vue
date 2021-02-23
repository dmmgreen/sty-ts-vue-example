<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <navbar/>
      </div>
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { AppMain, Navbar, Sidebar } from './components'

@Component({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar
  }
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
.app-wrapper{
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.main-container{
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: $sideBarWidth;
  position: relative;
}

.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
</style>

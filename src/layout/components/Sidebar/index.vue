<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu>
        <sidebar-item></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SidebarItem from './SidebarItem.vue'

@Component({
  name: 'Sidebar',
  components: {
    SidebarItem
  }
})
export default class extends Vue {}
</script>
<style lang="scss">
.sidebar-container {
  // reset element-ui css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
}
</style>
<style lang="scss" scoped>
.el-scrollbar {
  height: 100%
}

.has-logo {
  .el-scrollbar {
    height: calc(100% - 50px);
  }
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
</style>

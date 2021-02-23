<template>
  <div>
    <sidebar-logo
      :collapse="isCollapse"></sidebar-logo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu>
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SidebarItem from './SidebarItem.vue'
import SidebarLogo from './SidebarLogo.vue'
import variables from '@/styles/_variables.scss'
import { PermissionModule } from '@/store/modules/permission'

@Component({
  name: 'Sidebar',
  components: {
    SidebarItem,
    SidebarLogo
  }
})
export default class extends Vue {
  get routes() {
    return PermissionModule.routes
  }

  get variables() {
    return variables
  }

  get isCollapse() {
    return false
  }
}
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

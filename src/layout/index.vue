<template>
  <div>
    <div>
      <navbar/>
    </div>
    <app-main />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { AppMain, Navbar } from './components'

@Component({
  name: 'Layout',
  components: {
    AppMain,
    Navbar
  }
})
export default class extends Vue {

}
</script>

<template>
  <div>
    layout
    <app-main />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { AppMain } from './components'

@Component({
  name: 'Layout',
  components: {
    AppMain
  }
})
export default class extends Vue {

}
</script>

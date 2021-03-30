import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from '@/lang'
import '@/styles/element-variables.scss'
import '@/styles/index.scss'
import SvgIcon from 'vue-svgicon'
import '@/icons/components'
import '@/permission'
import * as filters from '@/filters'

Vue.config.productionTip = false
Vue.use(ElementUI, {
  i18n: (key: string, value: string) => i18n.t(key, value)
})

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

// Register global filter functions
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string]: Function })[key])
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

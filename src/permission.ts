import router from './router'
import { Message } from 'element-ui'
import { Route } from 'vue-router'
import i18n from '@/lang'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { UserModule } from '@/store/modules/user'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/auth-redirect']

// eslint-disable-next-line space-before-function-paren
router.beforeEach(async (to: Route, _: Route, next: any) => {
  NProgress.start()
  if (UserModule.token) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach((to: Route) => {
  NProgress.done()
})

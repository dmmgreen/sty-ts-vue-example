import Vue from 'vue'
import VueI18n from 'vue-i18n'

import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementEnLocale from 'element-ui/lib/locale/lang/en'

import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}
export const getLocale = () => {
  return 'zh'
}

const i18n = new VueI18n({
  locale: getLocale(),
  messages
})
export default i18n

/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-27 13:56:43
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-27 14:19:58
 */
import { createI18n } from 'vue-i18n'

import EN from './en'
import ZH from './zh'

const messages = {
  en: {
    ...EN
  },
  zh: {
    ...ZH
  }
}

const getCurrentLanguage = () => {
  const UALang = navigator.language // zh-CN
  const langCode = UALang.indexOf('zh') !== -1 ? 'zh' : 'en'
  localStorage.setItem('lang', langCode)
  return langCode
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getCurrentLanguage() || 'zh',
  messages: messages
})

export default i18n

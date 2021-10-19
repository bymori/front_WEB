/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-19 21:18:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-19 23:33:25
 */
import Vue from 'vue'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/less/reset.less'
// 重置样式表
import {
  Button,
  Select,
  Radio,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Form,
  FormItem,
  Input,
  Option,
  CheckboxGroup,
  Checkbox,
  DatePicker,
  Dialog
} from 'element-ui'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Vue.use(ElementUI)
Vue.use(Button)
Vue.component(Select.name, Select)
Vue.component(Radio.name, Radio)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Option)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(DatePicker)
Vue.use(Dialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

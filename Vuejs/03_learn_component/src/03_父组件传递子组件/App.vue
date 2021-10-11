<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 20:56:21
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 21:04:49
-->
<template>
  <div>
    App
    <show-message title="哈哈"
                  content='第二个参数content' />
    <show-message title="沫沫"
                  content='第二个参数-沫沫' />
    <show-message :title="title"
                  :content='content' />
    <show-message :title="msg.title"
                  :content='msg.content' />
    <show-message v-bind='msg' />
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
export default {
  components: { ShowMessage },
  data () {
    return {
      title: '嘻嘻',
      content: '这里是嘻嘻嘻',
      msg: {
        title: 'msg嘿嘿',
        content: 'msg嘿嘿',
      }
    }
  },
}
</script>

<style scoped>
</style>
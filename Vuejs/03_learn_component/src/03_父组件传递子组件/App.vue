<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 20:56:21
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 21:44:07
-->
<template>
  <div>
    App
    <show-message id="iocn"
                  class="ioinn"
                  title="哈哈"
                  content='第二个参数content' />
    <show-message title="沫沫"
                  content='第二个参数-沫沫' />

    <show-message :title="title"
                  :content='content' />

    <show-message :title="msg.title"
                  :content='msg.content' />

    <show-message v-bind='msg' />

    <multi-root-element id="aaa"/>
  </div>
</template>

<script>
import MultiRootElement from './MultiRootElement.vue'
import ShowMessage from './ShowMessage.vue'
export default {
  components: { ShowMessage, MultiRootElement },
  data () {
    return {
      title: '嘻嘻',
      content: '这里是嘻嘻嘻',
      msg: {
        title: '123',
        content: 'msg嘿嘿',
      }
    }
  },
}
</script>

<style scoped>
</style>
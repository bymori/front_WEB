<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-29 17:08:37
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-29 20:58:39
-->
<template>
  <div class="login-container">
    <el-form class="login-form" ref="formRef" :model="form" :rules="rules">
      <div class="title-container">
        <h3 class="title">用户登录-i18n</h3>
      </div>
      <el-form-item prop="username">
        <el-icon class="svg-container">
          <avatar />
        </el-icon>
        <!-- <svg-icon icon="user" class="svg-container"></svg-icon> -->
        <el-input v-model="form.username"> </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-icon class="svg-container">
          <avatar />
        </el-icon>
        <el-input v-model="form.password" show-password> </el-input>
      </el-form-item>
      <el-button
        type="primary"
        round
        class="login-button"
        @click="submitForm(formRef, form)"
        >登录-i18n</el-button
      >
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Avatar } from '@element-plus/icons-vue';
import { submitForm } from './utils';
import type { ElForm } from 'element-plus';

const form = ref({
  username: 'admin',
  password: '123456',
});

const rules = ref({
  username: [
    {
      required: true,
      message: '请输入名字',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
});

const formRef = ref<InstanceType<typeof ElForm>>();
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
      .el-input__suffix-inner {
        align-items: center;
      }
    }
    .login-button {
      width: 100%;
      box-sizing: border-box;
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    ::v-deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    // position: absolute;
    // right: 10px;
    // top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>

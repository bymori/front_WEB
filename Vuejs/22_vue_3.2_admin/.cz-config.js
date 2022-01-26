/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 12:05:21
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 12:21:45
 */
module.exports = {
  types: [
    { value: 'wip', name: '💪  Work in Progress | 开发中' },
    { value: 'feat', name: '✨  Features | 新功能' },
    { value: 'fix', name: '🐛  Bug Fixes | 修复' },
    { value: 'style', name: '💄  Styles | 代码样式' },
    { value: 'refactor', name: '🔨  Code Refactoring | 代码重构' },
    { value: 'ci', name: '💚  Fixing CI Build | CI 配置' },
    { value: 'revert', name: '⏪  Revert | 回退' },
    { value: 'build', name: '📦  Build System | 打包构建' },
    { value: 'chore', name: '🗯   Chore | 构建/工程依赖/工具' },
    { value: 'test', name: '✅  Tests | 测试' },
    { value: 'docs', name: '📝  Documentation | 文档变更' },
    { value: 'init', name: '🚀  Init | 初始化' }
  ],

  // 步骤
  messages: {
    type: '请选择提交的类型；',
    customScope: '请输入修改的范围（可选）',
    subject: '请简要描述提交（必填）',
    body: '请输入详细描述（可选）',
    footer: '请选择要关闭的issue（可选）',
    confirmCommit: '确认要使用以上信息提交？（y/n）'
  },

  // 跳过步骤
  skipQuestions: ['customScope', 'body', 'footer'],

  // 模块名
  // scopes: [{ name: 'account' }]

  // 默认长度
  subjectLimit: 72
};

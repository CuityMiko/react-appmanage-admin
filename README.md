# Node 版本

node >= 12

# 功能

```bash
- 登录 / 注销

- 权限验证
  - 页面权限
  - 路由权限

- 全局功能
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown

- Excel
  - 导出excel
  - 导入excel

- 错误页面
  - 404

- 组件
  - 拖拽列表

- 表格
- Home
- 引导页
- ECharts 图表
- 剪贴板
```

# 目录结构

```bash
├─ __json_server_mock__       # json-server相关mock文件
├─ .husky                     # husky相关hook配置
├─ public                     # 静态资源
│   ├─ favicon.ico            # favicon图标
│   └─ index.html             # html模板
├─ src                        # 项目源代码
│   ├─ services               # 所有请求
│   ├─ assets                 # 图片 字体等静态资源
│   ├─ components             # 全局公用组件
│   ├─ router                 # 全局配置
│   │   ├─ menuConfig.js      # 导航菜单配置
│   │   └─ routeMap.js        # 路由配置
│   ├─ lib                    # 第三方库按需加载
│   ├─ mock                   # 项目mock 模拟数据
│   ├─ store                  # 全局 store管理
│   ├─ styles                 # 全局样式
│   ├─ utils                  # 全局公用方法
│   ├─ views                  # views 所有页面
│   ├─ App.js                 # 入口页面
│   ├─ defaultSettings.js     # 全局默认配置
│   └─index.js                # 源码入口
├── .env.development          # 开发环境变量配置
├── .env.production           # 生产环境变量配置
├── config-overrides.js       # 对cra的webpack自定义配置
├── .eslintrc                 # eslint相关配置
├── .prettierrc.json          # prettier相关配置
├── commitlint.config.js      # 提交代码规范
└── package.json              # package.json
```

# 安装

```shell
# 安装依赖
yarn install

# 切换淘宝源，解决 npm 下载速度慢的问题
yarn install --registry=https://registry.npm.taobao.org

# 启动服务
npm start
# 启动完成后会自动打开浏览器访问 (http://localhost:5001)

# 打包
npm run build

# 启动mock服务
npm run mock-server
```

# 代码提交规范

[commitlint](https://github.com/conventional-changelog/commitlint)
[commitizen](https://github.com/commitizen-tools/commitizen)

```
commitlint:
eg.
git add --all
git commit -m 'feat: 提交功能'
git push
commitizen:
eg.
git add --all
npm run commit
```

| 规范名   | 描述                                                    |
| -------- | ------------------------------------------------------- |
| docs     | 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等 |
| build    | 调整编译脚本以及流程                                    |
| ci       | 持续集成 CICD 相关流程                                  |
| chore    | 改变构建流程、或者增加依赖库、工具等                    |
| feat     | 新增 feature                                            |
| fix      | 修复 bug                                                |
| merge    | 合并分之                                                |
| perf     | 优化相关，比如提升性能、体验                            |
| refactor | 代码重构，没有加新功能或者修复 bug                      |
| revert   | 回滚到上一个版本                                        |
| style    | 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑      |
| test     | 测试用例，包括单元测试、集成测试等                      |

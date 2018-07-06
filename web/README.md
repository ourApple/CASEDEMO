# case

> CASEDEMO

## Build Setup

``` bash
# 安装依赖
npm install

# 运行开发环境
npm run dev

# 发布(到dist)
npm run build

# 带分析报告的发布
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

访问: http://localhost:8080 （端口在文件 config/index.js 中 dev 段 port)
示例：http://localhost:8080/#/demo

```
```
// 项目目录
  --CASEDEMO
   --src     //源码目前
    --components    //公共组件
    --router   // 路由配置
    --style    // 公共样式
    --view     // 页面视图
      --home    // 主页
      --operatPerson   //运营人员模块
      --medicalManager   // 医学经理
      --medicalManager   // 个案管理师
      --pharmacyService  // 药房服务人员
      --feeControlReview  // 费控人员审核
      --claimAuditors  // 理赔人员审核
      --supplierManagement  //供应商管理
    --static  // 静态资源
      --data  // json文件
  --build   // 运行环境脚本及编译脚本
  -- config  //  运行配置

```
```
## webapi格式
 接口返回json格式
 ```
   {
    "result": {
      "total": 10,
      "rows": [{id: 1,name: 'guoxq'}]
    },
    "success": true,
    "error": null
   }
 ```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

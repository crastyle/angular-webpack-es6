#如何启动项目

### 第一步:安装node.js  官方网址:https://nodejs.org/en/  
    安装git客户端，如果是windows可能会需要配置git环境变量

#### node.js会自动安装npm包管理工具.

### 第二步:全局安装工具

    npm install gulp -g
    npm install webpack -g
    npm install cnpm  -g //淘宝镜像环境
    npm install bower -g
    npm install webpack gulp webpack-dev-server -g

### 第三步:添加es6的配置文件
    在项目根目录新建文件.babelrc
    输入以下内容

    {
      "plugins": ["transform-runtime"],
      "presets": ["es2015", "stage-0"]
    }

### 第四步:在项目根目录安装包依赖管理
    cnpm i
    bower i
    
    
    --tips  
    --当执行这两个命令的时候会在你的根目录下新建两个文件夹node_modules和bower_component
    --此时编辑器会在这两个文件夹里建立索引，非常消耗电脑性能，可能遇到卡死情况
    --解决办法：
    --使用IDEA/webstorm编辑器，手动在根目录新建一个node_modules文件夹，右键这个文件夹-->Mark directory as --> Exclude


### 第五步:在项目根目录输入 gulp 启动项目


## usage 新建模块

    gulp page --name 模块名  新建页面


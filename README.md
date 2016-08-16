#如何启动项目

## 需要安装node,推荐使用淘宝镜像源cnpm

### 为gulpfile添加es6的配置
    在项目根目录新建文件.babelrc
    输入以下内容

    {
      "plugins": ["transform-runtime"],
      "presets": ["es2015", "stage-0"]
    }

### 在项目根目录安装包依赖管理
    cnpm i
    bower i
    
    
    --tips  
    --当执行这两个命令的时候会在你的根目录下新建两个文件夹node_modules和bower_component
    --此时编辑器会在这两个文件夹里建立索引，非常消耗电脑性能，可能遇到卡死情况
    --解决办法：
    --使用IDEA/webstorm编辑器，手动在根目录新建一个node_modules文件夹，右键这个文件夹-->Mark directory as --> Exclude


### 启动项目
    gulp


## usage 新建页面

    gulp page --name 页面名
    example  gulp page --name product


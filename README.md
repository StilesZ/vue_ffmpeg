# default

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

npm install vue-router@3
vue-router@4只支持vue3以上

### 安装sass
```
npm install node-sass@4 --save-dev  //安装node-sass
npm install sass-loader@7 --save-dev  //安装sass-loader
//npm install style-loader --save-dev  //安装style-loader 有些人安装的是 vue-style-loader 其实是一样的！
npm install sass-resources-loader --save-dev 
```

### Node Sass version 7.0.0 is incompatible with ^4.0.0.（Node Sass 7.0.1 版与 ^4.0.0 不兼容）
```
1、npm uninstall node-sass;
2、npm i -D sass;
3、npm run dev；
```

### Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.（ / 版本更新）
```
npm install -g sass-migrator
sass-migrator division **/*.scss
```

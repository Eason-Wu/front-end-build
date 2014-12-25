Front-End-Build
==============

使用grunt的plugin组织的前段build tools。 小伙伴工作室自己的前端构建。


1. 安装 nodejs 

2. 全局安装 grunt 与 grunt-cli
	npm install grunt -g
	mac : sudo su 后再安装
  
  	npm install grunt-cli -g 
  	amc : sudo su 后安装
3. 安装初化模板插件，（非必需）
	npm install -g grunt-init 
	为了能够使用 grunt-init 命令生成 package.json 与 Gruntfile.js,其中Gruntfile 可以使用自定义的模板生成

	我们在此使用 grunt的基本模板做修改使用,
	获取原始模板：git clone https://github.com/gruntjs/grunt-init-gruntfile.git
	
	grunt-init --help 可以显示使用方法
4. grunt-contrib-concat 文件拼接组件
	用法参见下列 
	https://www.npmjs.com/package/grunt-contrib-concat
5. grunt-contrib-htmlmin 压缩html文件
	用法参见下列链接
	https://www.npmjs.com/package/grunt-contrib-htmlmin
6. grunt-contrib-uglify 压缩CSS文件以及合并文件
	用法参见链接
	https://www.npmjs.com/package/grunt-contrib-uglify
	https://github.com/gruntjs/grunt-contrib-uglify




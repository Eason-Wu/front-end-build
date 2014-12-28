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

以下的组件 安装请在项目的根目录使用以下命令
	npm install xx --save-dev
或者直接将package.json 以及 Gruntfile.js 复制到项目根目录，使用以下命令安装
	npm install 


1. grunt-contrib-concat 文件拼接组件
	用法参见下链接
	https://www.npmjs.com/package/grunt-contrib-concat

2. grunt-contrib-htmlmin 压缩html文件
	用法参见链接
	https://www.npmjs.com/package/grunt-contrib-htmlmin

3. grunt-contrib-uglify 压缩js文件以及合并文件
	用法参见链接
	https://www.npmjs.com/package/grunt-contrib-uglify
	https://github.com/gruntjs/grunt-contrib-uglify

4. grunt-contrib-cssmin  压缩CSS文件以及合并文件
	https://www.npmjs.com/package/grunt-contrib-cssmin

5. grunt-contrib-imagemin 压缩图片
	https://www.npmjs.com/package/grunt-contrib-imagemin

	需要 NODEJS v0.10.0+ NPM v1.4.0+ 
	升级 NPM Mac ： sudo curl -L https://npmjs.org/install.sh | sh
		如果出错请先卸载 NPM： sudo npm uninstall npm -g
		再安装NPM

Tips:  grunt XX -v 保证options运行，并打出所有log


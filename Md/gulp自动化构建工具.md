## gulp配置清单

npm init	项目初始化

npm init -y	全部执行默认值

npm install gulp -g	全局安装gulp

npm install gulp --save-dev	安装到开发依赖

package name	项目名字（不能中文不能大写）

在package.json文件中
	项目的依赖环境：
		生产依赖：	（项目部署上线后也需要）dependencies
		开发依赖：	（在开发阶段需要）devDependencies

## gulp插件

gulp-sass	将sass转为css
	gulp-cssmin	css压缩
	gulp-uglify	js压缩
	gulp-concat	文件合并
	gulp-rename	文件重新命名
	gulp-imagemin	图片压缩



## gulp调用：

1.task：创建任务
	参数："任务名称"（自定义名称）	["依赖任务","依赖任务"]（自定义名称，可以省略，可以依赖一个或多个）	回调函数

gulp.task("default",["start","end"],function(){
		console.log(111);
	})

运行gulp "任务名称"后，先执行依赖任务，然后执行任务名称，再执行函数。

## gulp方法：

src:源文件路径
	dest:目标文件路径
	pipe:管道，输送

运行gulp "任务名称"后，先执行依赖任务，然后执行任务名称，再执行函数。

gulp的所有操作都是基于gulpfile.js文件，在gulpfile.js中引入gulp，如下：
	let gulp = require("gulp"),
	let sass = require("gulp-sass"),
	let cssmin = require("gulp-cssmin"),
	let uglify = require("gulp-uglify"),
	let concat = require("gulp-concat"),
	let rename = require("gulp-rename"),
	let imagemin = require("gulp-imagemin"),

//**拷贝**src文件夹下的1.html文件到dist文件夹下：
	gulp.task("copyHTML",function(){
		return gulp.src("src/1.html").pipe(gulp.dest("dist"));
})

//拷贝src下所有的css文件到dist文件夹下：
	gulp.task("copyCSS",function(){
		return gulp.src("src/*.css").pipe(gulp.dest("dist"))
	})

//拷贝src下所有文件到dist（不包括src里面的文件夹）：
	gulp.task("copyALL",function(){
		return gulp.src("src/*").pipe(gulp.dest("dist"))
	})

//拷贝src下所有文件到dist（包括src里面的文件夹）：
	gulp.task("copyALL",function(){
		return gulp.src("src/*/**").pipe(gulp.dest("dist"))
	})



//**编译**sass文件：

gulp.task("sass",function(){
		return gulp.src("src/css/index.scss").pipe(sass()).pipe(gulp.dest("dist");
	//先指定源文件路径，再调用sass模块，再指定文件输送路径
	})



//**压缩**css文件：

gulp.task("cssmin",function(){
		return gulp.src("src/index.css").pipe(cssmin()).pipe(gulp.dest("dist");
	//先指定源文件路径，再调用css压缩模块，再指定文件输送路径
	})



//**压缩并重命名**文件

gulp.task("minname",function(){
		return gulp.src("src/index.css").pipe(cssmin()).pipe(rename(obj:"index.min.css")).pipe(gulp.dest("dist");
	//先指定源文件路径，再调用css压缩模块,再调用重命名模块并起名，再指定文件输送路径
	})



//**合并并压缩再重命名**文件

gulp.task("concssname",function(){
		return gulp.src(["src/css/index.css","src/css/style.css"]).pipe(cssmin()).pipe(rename(obj:"index.min.css")).pipe(gulp.dest("dist");
	//先指定要合并的多个源文件路径，再调用css压缩模块,再调用重命名模块并起名，再指定文件输送路径
	})



//**压缩图片**文件

gulp.task("image",function(){
		return gulp.src("src/img/*.jpg").pipe(imagemin()).pipe(gulp.dest("dist");
	//先指定源文件路径，再调用图片压缩模块,再指定文件输送路径
	})
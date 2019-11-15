const gulp = require("gulp")
gulp.task("hello",function(){
    console.log("hello")
})
/* 
    gulp的实战(gulp本身的功能)
    gulp.src()   查找文件的源路径
    gulp.dest(); 指定文件目的路径  这个路径不存在，会自动创建
    pipe()       管道(比喻)
*/
gulp.task("copy-html", function(){
    return gulp.src(["*.html"])
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
}) 
gulp.task("images", function(){
    /* return gulp.src("img/*.jpg")
    .pipe(gulp.dest("dist/images")); */

    /* //拷贝后缀是.jpg和.png的图片
    return gulp.src("img/*.{jpg,png}")
    .pipe(gulp.dest("dist/images")); */

    /* 
        拷贝文件夹内的图片
    */
//    return gulp.src("img/*/*.{jpg,png}")
//    .pipe(gulp.dest("dist/images"));

    /* 
        拷贝所有的图片
    */
   return gulp.src("img/*.{jpg,png}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
/* 
    多个文件夹中的数据，拷贝到一个目录中
*/
gulp.task("data", function(){
    return gulp.src(["xml/*.xml", "json/*.json", "!xml/5.xml"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

/* 
    监听  gulp.watch
*/  

/** 
 * 
 * 第三方插件
 *  1.下载插件
 *      cnpm install 插件名字 --save-dev
 *      cnpm i 插件名字 -D
 * 2.https://gulpjs.com/plugins/ 查找插件的文档
 * 3.通过CoomonJS规范引入文件
 * 
 * 开发版本 index.css
 * 上线版本 index.min.css
*/
const sass = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("sass", function(){
    return gulp.src(["stylesheet/index.scss","stylesheet/GoodsList.scss","stylesheet/GoodsDetails.scss"])
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(rename("GoodsList.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(rename("GoodsDetails.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
 
})
/** 
 * concat 合并js文件  如果使用类似于jquery的框架的话，代码不要合并
    压缩js文件
    gulp-uglify
 */
gulp.task("scripts", function(){
    return gulp.src(["javascript/*.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})
/** 
 * 
 * gulp-connect  启动临时服务器  不支持php
 * 
 * 现实是刷新
*/


/*  
    一次性执行多个任务
*/
gulp.task("build", ["copy-html", "images", "data","sass","scripts"], function(){
    console.log("项目建立成功");
})

gulp.task("watch", function(){
    /* 
        第一个参数，你要监听的路径
        第二个参数，必须是数组，传入，监听成功以后要执行的任务
    */
    gulp.watch("*.html", ['copy-html']);
    gulp.watch("img/*.{jpg,png}", ["images"]);
    gulp.watch(["xml/*.xml", "json/*.json", "!xml/5.xml"], ['data']);
    gulp.watch(["stylesheet/index.scss","stylesheet/GoodsList.scss","stylesheet/goodsDetails.scss"], ['sass']);
    gulp.watch(["javascript/*.js"], ['scripts']);
})


const connect = require("gulp-connect");
gulp.task("server", function(){
    connect.server({
        //服务器根目录
        root: "dist",
        //端口号0-65535
        port: 12345,
        //实时更新
        livereload: true

    })
})
//默认的gulp任务  运行 输入 gulp
gulp.task("default", ["watch", "server"]);
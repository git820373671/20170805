var gulp = require("gulp");       //编译less
var less = require("gulp-less");  //定任务
var cssMin = require("gulp-minify-css");

gulp.task("less", function () {
  gulp.src('src/assets/css/newIview.less') //编译的文件位置
    .pipe(less())
    .pipe(cssMin())
    .pipe(gulp.dest('src/assets/css'));  //编译后的文件位置
})
gulp.task('autoCss', function () {
  gulp.watch('src/assets/css/newIview.less', ['less', 'autoCss'])
});

gulp.task('default', ['createdCss', 'autoCss']);


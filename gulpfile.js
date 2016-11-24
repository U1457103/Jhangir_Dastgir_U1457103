var gulp = require('gulp');


var cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
var less = require('gulp-sources-less');
var path = require('path');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();


gulp.task('minify-css', function() {
    return gulp.src('J-App/css/app.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('imgmin', () =>
    gulp.src('J-App/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);
 
gulp.task('less', function () {
  return gulp.src('J-App/less/app.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('J-App/css'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'J-App'
    },
    browser:["iexplore", "chrome"]
  });
});

gulp.task('browserSyncReload', function(){
  browserSync.reload();
});

gulp.task('watch',['browserSync'],function(){
    gulp.watch("J-App/index.html", ['browserSyncReload']);
});














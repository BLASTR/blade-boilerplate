// require gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var sassFiles = [
    'src/scss/*.scss',
    'src/scss/**/**/*.scss',
    'src/scss/**/*.scss'
];

var jsLibs = [
    'assets/js/*.js'
];

// default task
gulp.task('default', ['sass', 'watch']);



gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/css/'))
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('public/css/'));
});


// watch task
gulp.task('watch', function() {
    gulp.watch(sassFiles, ['sass']);
});
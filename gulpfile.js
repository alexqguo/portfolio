const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

gulp.task('default', () => {});

gulp.task('js', () => {
    gulp.src('./dev/javascripts/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(gulp.dest('./public/javascripts/'));
});

gulp.task('sass', () => {
    gulp.src('./dev/stylesheets/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheets/'));
});

// Need to restart gulp when you add new files I think
gulp.task('watch', ['js', 'sass'], () => {
    gulp.watch('./dev/javascripts/*.js', ['js']);
    gulp.watch('./dev/stylesheets/*.scss', ['sass']);
});

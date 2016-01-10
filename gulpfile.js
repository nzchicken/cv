var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins);
}

//gulp.task('scripts', getTask('scripts'));
gulp.task('sass', getTask('sass'));

gulp.task('default', ['sass'], function () {
    //gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
});

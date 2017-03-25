var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ pattern: '*'});
var taskPath = './tasks/';
var taskList = require('fs').readdirSync(taskPath);
require('dotenv').load();

taskList.forEach(function(taskFile) {
    if (/.*.js$/.test(taskFile)) require(taskPath + taskFile)(gulp, plugins);
})

gulp.task('clean', function() {
    plugins.del.sync(['dist']);  
});

gulp.task('build', function() {
    plugins.runSequence('clean',
               [ 'html', 'includes', 'scss', 'scripts' ]);

});

gulp.task('watch', function() {
    plugins.runSequence('build', 'serve');
});

var reload;

module.exports = function(gulp, plugins) {
    gulp.task('serve', function() {
        reload = plugins.browserSync.reload;
        plugins.browserSync.init({
            server: "./dist"
        })

        gulp.watch("src/scss/**/*.{scss,sass}", [ 'scss' ]);
        gulp.watch("src/js/**/*.js", [ 'js-watch' ], reload);
        gulp.watch("src/**/*.hbs", [ 'html' ]).on("change", reload);
    });
    gulp.task('js-watch', [ 'scripts' ]); 

};

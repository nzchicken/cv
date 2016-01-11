module.exports = function (gulp,plugins) {
    
    gulp.task('css', function() {
        var options = { matchPattern: "*.css" };
        return gulp.src('src/styles.css')
            .pipe(plugins.cssimport(options))
            .pipe(gulp.dest("dist/css"));
    });

    gulp.task('scss', function() {
        return gulp.src('src/scss/styles.scss')
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer())
            .pipe(plugins.cssnano())
            .pipe(gulp.dest('dist/css'))
            .pipe(plugins.browserSync.stream({ match: '**/*.css'}));
    });

    gulp.task('scripts', function () {
        return gulp.src('src/js/**/*.js')
            .pipe(plugins.concat('scripts.js'))
            .pipe(plugins.uglify())
            .pipe(gulp.dest('dist/js'));
    });

    gulp.task('html', function() {
        var templateData = {};

        var options = {
            ignorePartials: true,
            batch: [
                './src/templates'
            ],
            helpers: {}
        };

        return gulp.src('src/index.hbs')
            .pipe(plugins.compileHandlebars(templateData, options))
            .pipe(plugins.rename('index.html'))
            .pipe(gulp.dest('dist'));
    });

};

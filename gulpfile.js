var gulp = require('gulp');
var less = require('gulp-less');
var open = require('gulp-open');
var embedTemplate = require('gulp-angular-embed-templates');
var glob = require('glob');

gulp.task('js:component', function() {
    glob('source/components/**/*.js', function(err, files) {
        files.forEach(function(f, i) {
            gulp.src(f)
                .pipe(embedTemplate())
                .pipe(gulp.dest('build/js'));
        });
    });
});
gulp.task('js', function() {
    return gulp.src('source/js/*.js')
            .pipe(gulp.dest('build/js'));
});
gulp.task('html', function() {
    return gulp.src('source/html/*.html').pipe(gulp.dest('build'));
});
gulp.task('css', function() {
    return gulp.src('source/less/*.less').pipe(less()).pipe(gulp.dest('build/css'));
});


gulp.task('build', ['html','css', 'js:component', 'js']);
gulp.task('run', function() {
    gulp.src('build/index.html').pipe(open());
} );

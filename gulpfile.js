var gulp            = require('gulp'),
    concat          = require('gulp-concat'),
    sass            = require('gulp-sass'),
    rename          = require('gulp-rename'),
    filter          = require('gulp-filter'),
    neat            = require('node-neat');

var script_dependencies = require('./src/script_dependencies.json')

gulp.task('js', function() {
  var stream = gulp.src(script_dependencies.concat(['src/angular/**/module.js', 'src/angular/**/*.js']))
    .pipe(concat('application.js'))
    .pipe(gulp.dest('assets'));
  return stream;
});

gulp.task('css', function() {
  var stream = gulp.src('src/sass/application.scss')
    .pipe(sass({
      includePaths: neat.includePaths,
      errLogToConsole: true
    }))
    .pipe(gulp.dest('assets'));
  return stream;
});

gulp.task('build', ['js','css'])

gulp.task('watch', ['build'], function() {
  gulp.watch('src/angular/**/*.js', ['js']);
  gulp.watch('src/sass/**/*.scss', ['css']);
})

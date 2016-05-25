const gulp = require('gulp');
var rename = require("gulp-rename");

gulp.task('default', ['webserver', 'watch']);

// webserver
const webserver = require('gulp-webserver');
gulp.task('webserver', function () {
    gulp.src('./dest/')
        .pipe(webserver({
            host: 'localhost',
            port: 8000,
            livereload: true
        }));
});

gulp.task('watch', function() {
  gulp.watch('./jsx/*.jsx', ['react'])
  gulp.watch('./tag/*.tag', ['riot'])
});

// react
var react = require('gulp-react');
gulp.task('react', function () {
	return gulp.src('./jsx/*.jsx')
		.pipe(react())
    .pipe(rename({
      extname: '.react.js'
    }))
		.pipe(gulp.dest('./dest/js/'));
});

// riot
var riot = require('gulp-riot');
gulp.task('riot', function() {
  gulp.src('./tag/*.tag')
      .pipe(riot())
      .pipe(rename({
        extname: '.riot.js'
      }))
      .pipe(gulp.dest('./dest/js/'));
})

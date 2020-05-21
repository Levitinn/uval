const gulp = require('gulp')

module.exports = function stylesCss() {
    return gulp.src('src/styles/*.css')
      .pipe(gulp.dest('build/css'))
  }
  
const gulp = require('gulp')

module.exports = function docs() {
  return gulp.src('src/files/*')
    .pipe(gulp.dest('build/'))
}
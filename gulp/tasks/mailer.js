const gulp = require('gulp')

module.exports = function docs() {
  return gulp.src('src/phpmailer/*')
    .pipe(gulp.dest('build/phpmailer'))
}
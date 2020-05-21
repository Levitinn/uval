const gulp = require('gulp')

module.exports = function docs() {
  return gulp.src('src/docs/*')
    .pipe(gulp.dest('build/docs'))
}



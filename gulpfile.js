const gulp = require('gulp');
const run = require('gulp-run-command').default;
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

gulp.task('publish', () => {
  console.log('Publish Gitbook (_book) to Github Pages');
  return run('gitbook build --gitbook=3.2.3') 
    && gulp.src('./_book/**/*')
    .pipe($.ghPages({
      origin: 'origin',
      branch: 'gh-pages'
    }));
});
import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import webpackConfig from '../webpack.config.cjs';

const compileScripts = () =>
  gulp.src([
    'source/js/main.js',
    'source/js/formfirst.js',
    'source/js/formsecond.js'
  ])
      .pipe(webpackStream(webpackConfig))
      .pipe(gulp.dest('build/js'));

export default compileScripts;

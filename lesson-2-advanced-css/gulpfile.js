// Load plugins
const autoprefixer = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const gulp = require("gulp");
const babel = require('gulp-babel');
const header = require("gulp-header");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const pkg = require('./package.json');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const BABEL_POLYFILL = './node_modules/babel-polyfill/browser.js';

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function (cb) {

  // Font Awesome
  gulp.src([
    './node_modules/@fortawesome/**/*',
  ])
    .pipe(gulp.dest('./vendor'))

  // jQuery
  gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
    .pipe(gulp.dest('./vendor/jquery'))

  // jQuery Easing
  gulp.src([
    './node_modules/jquery.easing/*.js'
  ])
    .pipe(gulp.dest('./vendor/jquery-easing'))

  cb();

});

// CSS task
// For homework change source to sass-homework folder
function css() {
  return gulp
    .src("./sass-homework/*.scss")
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .on("error", sass.logError)
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest("./css"))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./css"))
    .pipe(browsersync.stream());
}

function js() {
  return gulp.src('./js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    // //only uglify if gulp is ran with '--type production'
    // .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest('dist-js'));
}



// Tasks
gulp.task("css", css);
gulp.task("js", js);

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Watch files
function watchFiles() {
  gulp.watch("./sass-homework/**/*", css); //For homework change to sass-homework
  gulp.watch("./*.html", browserSyncReload);
}

gulp.task("default", gulp.parallel('vendor', css));

// dev task
gulp.task("dev", gulp.parallel(watchFiles));

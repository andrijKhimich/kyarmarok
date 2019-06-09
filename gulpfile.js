let gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyjs'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  notify = require("gulp-notify"),
  sourcemaps = require('gulp-sourcemaps'), // path to includes files
  del = require('del'), // remove dist folder
  rigger = require('gulp-rigger'), // build html files in one
  cache = require('gulp-cache'),
  gcmq = require('gulp-group-css-media-queries'); // group css media

let path = 'src/';


gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: path
    },
    notify: false,
    open: true,
    // tunnel: true,
    // tunnel: "projectname", //Demonstration page: http://projectname.localtunnel.me
  });
});


gulp.task('html', function () {
  return gulp.src(path + 'html/*.html')
    .pipe(rigger())
    .pipe(gulp.dest(path))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('sass', function () {
  return gulp.src([
    // path + 'libs/bootstrap/scss/bootstrap-grid.scss',
    path + 'scss/**/*.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded' //or 'compressed'
    }).on('error', notify.onError()))
    .pipe(autoprefixer(['last 15 versions'], {
      cascade: true
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(concat('main.css'))
    .pipe(gcmq('main.css'))
    .pipe(cleanCSS()) // zip css
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(path + 'css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', function () {
  return gulp.src([
      path + 'libs/jquery/dist/jquery.min.js',
      path + 'libs/slick_1.9.0/slick/slick.min.js',
      // path + 'libs/odometer/odometer.min.js',
      // path + 'libs/select2/dist/js/select2.min.js',
      path + 'libs/svg4everybody_2.1.9/svg4everybody.js'
      // path + 'libs/bootstrap/dist/js/bootstrap.bundle.min.js',
      // path + 'libs/bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('libs.min.js')) // convert all in one file
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(path + 'js'))
    .pipe(gulp.dest(path + 'js')) // deploy to src/js
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', function () {
  gulp.watch(path + 'html/**/*.html', gulp.parallel('html'));
  gulp.watch(path + 'scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch(path + 'js/**/*.js,', gulp.parallel('js'));
  gulp.watch(path + 'js/script.js', gulp.parallel('js'));
});


gulp.task('clear', function () {
  return cache.clearAll();
});
gulp.task('default', gulp.parallel('watch', 'clear', 'html', 'sass', 'js', 'browser-sync'));


gulp.task('removebuild', function () {
  return del('dist');
});




gulp.task('buildHtml', function () {
  return gulp.src(path + '*.html')
    // .pipe(cleanhtml())
    .pipe(gulp.dest('dist/'));
});
gulp.task('buildCss',
  function () {
    return gulp.src(path + 'css/**.css')
      .pipe(gulp.dest('dist/css'));
  });
gulp.task('buildScript',
  function () {
    return gulp.src(path + 'js/**/*')
      // .pipe(uglify())
      .pipe(gulp.dest('dist/js/'));
  });
gulp.task('buildImg',
  function () {
    return gulp.src(path + 'img/**/*')
      .pipe(gulp.dest('dist/img/'));
  });
gulp.task('buildFonts',
  function () {
    return gulp.src(path + 'fonts/**/*')
      .pipe(gulp.dest('dist/fonts/'));
  });



// Build task
gulp.task('build', gulp.series('removebuild', gulp.parallel('html', 'sass', 'js'), 'buildHtml', 'buildCss', 'buildScript', 'buildImg', 'buildFonts'));
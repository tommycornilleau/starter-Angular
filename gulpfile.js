// Requires
var gulp = require('gulp');

// Include plugins
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// var gulpsync = require('gulp-sync')(gulp);
// var concat = require('gulp-concat');
// var uncss = require('gulp-uncss');
// var rename = require('gulp-rename');
// var extender = require('gulp-html-extend');
// var critical = require('critical').stream;
// var imagemin = require('gulp-imagemin');

// Paths
var source = './app';
var prod = './dist';

// Tâche "css" = LESS + autoprefixer + unCSS + minify
gulp.task('css', function() {
  return gulp.src(source + '/scss/**/*.scss')
    // .pipe(sass().on('error', sass.logError))
    .pipe(sass())
    .pipe(autoprefixer({
          browsers: ['last 2 versions'],
      }))
    // .pipe(rename({
    //   suffix: '.min'
    // }))
    .pipe(minify())
    .pipe(gulp.dest(prod + '/css'))
    .pipe(browserSync.stream());
});




gulp.task('browser-sync', function() {
  browserSync.init({
      proxy: "local.dev"
  });
});


// // Tâche "js" = uglify + concat
// gulp.task('js', function() {
//   return gulp.src(source + '/app/js/*.js')
//     .pipe(uglify())
//     .pipe(browserify())
//     .pipe(concat('global.min.js'))
//     .pipe(gulp.dest(prod + '/assets/js/'))
//     .pipe(browserSync.stream());
// });

// // // Tâche "img" = Images optimisées
// // gulp.task('img', function () {
// //   return gulp.src(source + '/assets/img/*.{png,jpg,jpeg,gif,svg}')
// //     .pipe(imagemin())
// //     .pipe(gulp.dest(prod + '/assets/img'));
// // });

// // Tâche "prod" = toutes les tâches ensemble
// gulp.task('prod', gulpsync.sync(['css', 'js', 'html', 'critical','img']));

// // Tâche "watch" = je surveille LESS et HTML
// gulp.task('watch', function () {

//   browserSync.init({
//     server: "./app"
//   });


//   gulp.watch(source + '/app/scss/*.scss', ['css']);
//   gulp.watch(source + '/app/js/*.js', ['js']);
//   gulp.watch("*.html").on("change", browserSync.reload);
// });

// // Default task
// gulp.task('default', ['css']);








// Tâche "html" = includes HTML
// gulp.task('html', function() {
//   return  gulp.src(source + '/{,conf/}/{,livres/}*.html')
//     // Generates HTML includes
//     .pipe(extender({
//       annotations: false,
//       verbose: false
//     })) // default options
//     .pipe(gulp.dest(prod));
// });

// // Tâche "critical" = critical inline CSS
// gulp.task('critical', function() {
//   return  gulp.src(prod + '/*.html')
//     .pipe(critical({
//       base: prod,
//       inline: true,
//       width: 320,
//       height: 480,
//       minify: true
//     }))
//     .pipe(gulp.dest(prod));
// });
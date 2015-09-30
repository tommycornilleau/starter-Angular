// Requires
var gulp = require('gulp');

// Include plugins
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var uncss = require('gulp-uncss');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var extender = require('gulp-html-extend');
var critical = require('critical').stream;
var imagemin = require('gulp-imagemin');
var gulpsync = require('gulp-sync')(gulp);

// Paths
var source = './_src';
var prod = './_dist';

// Tâche "css" = LESS + autoprefixer + unCSS + minify
gulp.task('css', function() {
  return gulp.src(source + '/assets/css/*.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(uncss({
      html: [source + '/{,_includes/}/{,conf/}/{,livres/}*.html']
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minify())
    .pipe(gulp.dest(prod + '/assets/css/'));
});

// Tâche "html" = includes HTML
gulp.task('html', function() {
  return  gulp.src(source + '/{,conf/}/{,livres/}*.html')
    // Generates HTML includes
    .pipe(extender({
      annotations: false,
      verbose: false
    })) // default options
    .pipe(gulp.dest(prod));
});

// Tâche "critical" = critical inline CSS
gulp.task('critical', function() {
  return  gulp.src(prod + '/*.html')
    .pipe(critical({
      base: prod,
      inline: true,
      width: 320,
      height: 480,
      minify: true
    }))
    .pipe(gulp.dest(prod));
});

// Tâche "js" = uglify + concat
gulp.task('js', function() {
  return gulp.src(source + '/assets/js/*.js')
    .pipe(uglify())
    .pipe(concat('global.min.js'))
    .pipe(gulp.dest(prod + '/assets/js/'));
});

// Tâche "img" = Images optimisées
gulp.task('img', function () {
  return gulp.src(source + '/assets/img/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin())
    .pipe(gulp.dest(prod + '/assets/img'));
});

// Tâche "prod" = toutes les tâches ensemble
gulp.task('prod', gulpsync.sync(['css', 'js', 'html', 'critical','img']));

// Tâche "watch" = je surveille LESS et HTML
gulp.task('watch', function () {
  gulp.watch(source + '/assets/css/*.less', ['css']);
  gulp.watch(source + '/{,conf/}/{,livres/}*.html', ['html']);
});

// Default task
gulp.task('default', ['css']);
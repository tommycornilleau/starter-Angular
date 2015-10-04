// Requires
var gulp = require('gulp');

// Include plugins
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
// var uglify = require('gulp-uglify');
// var reload = browserSync.reload;
// var concat = require('gulp-concat');

// var gulpsync = require('gulp-sync')(gulp);
// var uncss = require('gulp-uncss');
// var rename = require('gulp-rename');
// var extender = require('gulp-html-extend');
// var critical = require('critical').stream;
// var imagemin = require('gulp-imagemin');

// Paths
var sourceDirectory = './app';
var sourcePath = {
	scss: sourceDirectory + '/scss/**/*.scss',
	js: sourceDirectory + '/js/**/*.js',
	other: [ sourceDirectory + '/font/**', sourceDirectory + '/img/**', sourceDirectory + '/partials/**', sourceDirectory + '/index.html' ]
};
var distDirectory = './dist';
var distPath = {
	css: distDirectory + '/css',
	js: distDirectory + '/js',
	other: distDirectory
};

// Tâche "css" = LESS + autoprefixer + unCSS + minify
gulp.task('css', function() {
	return gulp.src(sourcePath.scss)
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
	}))
	.pipe(minify())
	.pipe(gulp.dest(distPath.css));
	// .pipe(browserSync.stream());
});




gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: 'local.dev'
	});
});


// Tâche "js" = uglify + concat
gulp.task('js', function() {
	return gulp.src(sourcePath.js)
	// .pipe(uglify())
	// .pipe(browserify())
	// .pipe(concat('global.min.js'))
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(jshint.reporter('fail'))
	.pipe(jshint.reporter('jshint checking'))
	.pipe(jscs())
	.pipe(jscs.reporter('jscs checking'))
	.pipe(gulp.dest(distPath.js));
	// .pipe(browserSync.stream());
});

gulp.task('copy', function() {
	return gulp.src(sourcePath.other, {
		base: sourceDirectory
	})
	.pipe(gulp.dest(distPath.other));
		// .pipe(reload({
		//   stream: true,
		//   once: true
		// }));
});

// // Tâche "watch" = je surveille LESS et HTML
// gulp.task('watch', function () {

//   browserSync.init({
//     server: "./app"
//   });


//   gulp.watch(source + '/app/scss/*.scss', ['css']);
//   gulp.watch(source + '/app/js/*.js', ['js']);
//   gulp.watch("*.html").on("change", browserSync.reload);
// });

// Default task
gulp.task('prod', ['css', 'browser-sync', 'js', 'copy']);
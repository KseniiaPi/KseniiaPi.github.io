const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const preproc = require('gulp-less');
const concat = require("gulp-concat");
const config = {
	src: './',
	css: {
		watch: 'src/css/**/*.less',
		src: 'src/css/styles.less',
		dest: 'dist/css/'
	},
	js: {
		watch: 'src/**/*.js',
		src: 'src/js/main.js',
		dest: 'dist/js/'
	},
	html: {
		src: 'index.html'
	}
};
gulp.task('css', function () {
	return gulp.src(config.src + config.css.src).pipe(sourcemaps.init()).pipe(preproc()).pipe(gcmq()).pipe(autoprefixer({
		browsers: ['> 0.1%'],
		cascade: false
	})).pipe(cleanCSS({
		level: 2
	})).pipe(sourcemaps.write('.')).pipe(gulp.dest(config.src + config.css.dest)).pipe(browserSync.reload({
		stream: true
	}));
});
gulp.task('js', function () {
	return gulp.src(config.src + config.js.watch).pipe(sourcemaps.init()).pipe(concat("main.js")).pipe(sourcemaps.write(".")).pipe(gulp.dest(config.src + config.js.dest)).pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('watch', ['browserSync'], function () {
	gulp.watch(config.src + config.css.watch, ['css']);
	gulp.watch(config.src + config.js.watch, ['js']);
	gulp.watch(config.src + config.html.src, browserSync.reload);
});
gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: config.src
		}
	});
});

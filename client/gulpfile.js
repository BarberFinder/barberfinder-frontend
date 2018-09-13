'use strict';

let gulp = require('gulp');
let del = require('del');
let sass = require('gulp-sass');
let minify = require('gulp-clean-css');
let concat = require('gulp-concat');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');

gulp.task('clean', () => {
	del('./public/dist/js/barbershop-finder.min.js');
});

gulp.task('sass', () => {
	gulp
		.src('./assets/styles/scss/styles.scss')
		.pipe(sass())
		.pipe(sourcemaps.init())
		.pipe(minify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/dist/styles'));
});

gulp.task('watch', () => {
	gulp.watch('./assets/styles/scss/**/*.scss', [ 'sass' ]);
});

gulp.task('build:js', [ 'clean' ], () => {
	gulp
		.src([
			'./assets/js/vendor/jquery-1.12.4.min.js',
			'./assets/js/vendor/imagesloaded.pkgd.min.js',
			'./assets/js/vendor/smooth-scroll.min.js',
			'./assets/js/main.js'
		])
		.pipe(concat('barbershop-finder.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/dist/js'));
});

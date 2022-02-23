const { src, dest, watch, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const prefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-clean-css');
const terser = require('gulp-terser');

const scss = () => {
    return src('./frontend/src/styles/**/*.scss')
        .pipe(sass())
        .pipe(prefixer('last 2 versions'))
        .pipe(cssmin())
        .pipe(dest('./frontend/dist/styles'))
}

const scripts = () => {
    return src('./frontend/src/scripts/app.js')
        .pipe(terser())
        .pipe(dest('./frontend/dist/scripts/'))
}

const watchTask = () => {
    watch('./frontend/src/styles/**/*.scss', scss)
    watch('./frontend/src/scripts/app.js', scripts)
}

exports.default = series(scss, scripts, watchTask);
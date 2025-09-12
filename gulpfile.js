const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compila SCSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/styles'));
}

// Observa mudanças
function watchFiles() {
    gulp.watch('./src/styles/*.scss', styles);
}

// Exporta
exports.styles = styles;
exports.watch = watchFiles;
exports.default = styles;

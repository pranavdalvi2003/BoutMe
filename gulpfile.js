const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");

// Compile SCSS to CSS
function styles() {
  return src("src/scss/**/*.scss") // Change this to your SCSS location
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(dest("dist/css"));
}

// Minify HTML
function html() {
  return src("src/*.html") // Change this to your HTML location
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
}

// Minify JavaScript
function scripts() {
  return src("src/js/**/*.js") // Change this to your JS location
    .pipe(uglify())
    .pipe(dest("dist/js"));
}

// Watch for changes
function watchFiles() {
  watch("src/scss/**/*.scss", styles);
  watch("src/*.html", html);
  watch("src/js/**/*.js", scripts);
}

// Default Gulp task
exports.default = series(styles, html, scripts, watchFiles);
exports.build = series(styles, html, scripts);

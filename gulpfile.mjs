import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import uglify from "gulp-uglify";
import htmlmin from "gulp-htmlmin";
import { deleteAsync } from "del";

const { src, dest, watch, series } = gulp;
const sass = gulpSass(dartSass);

// Clean the `dist` folder
async function clean() {
  await deleteAsync(["dist"]);
}

// Compile SCSS to CSS
function styles() {
  return src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(dest("dist/css"));
}

// Minify HTML
function html() {
  return src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
}

// Minify JavaScript
function scripts() {
  return src("src/js/**/*.js").pipe(uglify()).pipe(dest("dist/js"));
}

// Watch for changes
function watchFiles() {
  watch("src/scss/**/*.scss", styles);
  watch("src/*.html", html);
  watch("src/js/**/*.js", scripts);
}

// Default Gulp task
export default series(clean, styles, html, scripts, watchFiles);
export const build = series(clean, styles, html, scripts);

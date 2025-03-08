// Node.js Packages / Dependencies
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // ✅ Correctly defining Sass compiler
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const imageMin = require('gulp-imagemin');
const pngQuant = require('imagemin-pngquant');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const mozjpeg = require('imagemin-mozjpeg');
const del = require('del');

// Paths
const paths = {
    root: { www: './public_html' },
    src: {
        root: 'public_html/assets',
        html: 'public_html/**/*.html',
        css: 'public_html/assets/css/*.css',
        js: 'public_html/assets/js/*.js',
        vendors: 'public_html/assets/vendors/**/*.*',
        imgs: 'public_html/assets/imgs/**/*.{png,jpg,gif,svg}',
        scss: 'public_html/assets/scss/**/*.scss'
    },
    dist: {
        root: 'public_html/dist',
        css: 'public_html/dist/css',
        js: 'public_html/dist/js',
        imgs: 'public_html/dist/imgs',
        vendors: 'public_html/dist/vendors'
    }
};

// Compile SCSS
gulp.task('sass', function () {
    return gulp.src(paths.src.scss)
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // ✅ Correct Sass error handling
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.src.root + '/css'))
        .pipe(browserSync.stream());
});

// Minify + Combine CSS
gulp.task('css', function () {
    return gulp.src(paths.src.css)
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(concat('steller.css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.dist.css));
});

// Minify + Combine JS
gulp.task('js', function () {
    return gulp.src(paths.src.js)
        .pipe(uglify().on('error', function (err) {
            console.error(err.toString());
            this.emit('end');
        }))
        .pipe(concat('steller.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.dist.js))
        .pipe(browserSync.stream());
});

// Compress Images (JPEG, PNG, GIF, SVG)
gulp.task('img', function () {
    return gulp.src(paths.src.imgs)
        .pipe(imageMin([
            imageMin.gifsicle(),
            mozjpeg({ quality: 75, progressive: true }),
            imageMin.optipng(),
            imageMin.svgo(),
            pngQuant()
        ]))
        .pipe(gulp.dest(paths.dist.imgs));
});

// Copy vendors to dist
gulp.task('vendors', function () {
    return gulp.src(paths.src.vendors)
        .pipe(gulp.dest(paths.dist.vendors));
});

// Clean dist folder
gulp.task('clean', function () {
    return del([paths.dist.root]);
});

// Prepare all assets for production
gulp.task('build', gulp.series('clean', 'sass', 'css', 'js', 'vendors', 'img'));

// Watch files for changes & reload browser
gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: paths.root.www
        }
    });
    gulp.watch(paths.src.scss, gulp.series('sass'));
    gulp.watch(paths.src.js, gulp.series('js')).on('change', browserSync.reload);
    gulp.watch(paths.src.html).on('change', browserSync.reload);
});

// Default Gulp Task
gulp.task('default', gulp.series('build', 'watch'));

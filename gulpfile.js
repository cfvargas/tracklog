var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    nib = require('nib');


gulp.task('build:jade', function() {
    gulp.src('./src/jade/*.jade')
    .pipe(plumber())
    .pipe(jade({
        pretty: true
        }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build:stylus', function() {
    gulp.src('./src/stylus/*.styl')
    .pipe(plumber())
    .pipe(stylus({
        use: nib(),
        'include css': true
        }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('imgmin', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});


gulp.task('watch', function() {
    gulp.watch('./src/jade/**/**/*.jade', ['build:jade']);
    gulp.watch(['./src/stylus/*.styl', './src/stylus/includes/*.styl'], ['build:stylus']);
});


gulp.task('default', ['build:jade', 'build:stylus', 'watch']);
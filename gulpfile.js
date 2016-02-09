'use strict';

const gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    merge = require('merge2'),
    Builder = require('systemjs-builder');

const tsProject = typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('compile', () => {
    const tsResult = gulp.src('./src/**/*.ts')
        .pipe(typescript(tsProject));

    return merge([
        tsResult.js.pipe(gulp.dest('./dist/terminal2')),
        tsResult.dts.pipe(gulp.dest('./dist/terminal2'))
    ])
});

gulp.task('compile-app', () => {
    const tsResult = gulp.src('./appSrc/*.ts')
        .pipe(typescript(tsProject));

    return merge([
        tsResult.js.pipe(gulp.dest('./sample/app'))
    ])
});


gulp.task('systemjs', ['compile'], () => {
    var builder = new Builder();

    builder.loadConfig('./system.config.js')
        .then(() => {
            builder.bundle('terminal2/core', 'dist/terminal2/bundles/terminal2.js');
        });
});

gulp.task('copy-dist', ['systemjs'], () => {
    return gulp.src('./dist/terminal2/**/*')
        .pipe(gulp.dest('./node_modules/terminal2'));
});

gulp.task('default', ['copy-dist']);

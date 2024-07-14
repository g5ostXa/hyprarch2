var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var outDir = 'out';

gulp.task('default', function () {
    tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(outDir));

    gulp.src('src/beautify_bash.py')
        .pipe(gulp.dest(outDir + '/src'));
});
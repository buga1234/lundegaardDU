/*

   Pro tot zadani gulpfile pouzivame jen pro kompilaci .less souboru

*/


// inicializujeme gulp
var gulp = require('gulp');

// inicializujeme compilator less
var less = require('gulp-less');


// vytvarime metodu pro kompilaci souboru main.less
gulp.task('less', function () {

    // nastavujeme cestu do main.less
    gulp.src('./assets/less/main.less')
         // ukazujeme jakou metodu chceme pouzit pro soubor main.less
        .pipe(less())
        // ukazujeme cestu kam ulozit zkompilovany main.css
        .pipe(gulp.dest('./assets/css'));
});
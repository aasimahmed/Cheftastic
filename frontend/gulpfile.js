// Load plugins
const gulp = require("gulp"),
browserSync = require("browser-sync").create(),
sass = require("gulp-sass"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssnano = require("cssnano"),
sourcemaps = require("gulp-sourcemaps");

var paths = {
    styles: {
        src : "src/**/*.scss",
        dest: "dist/css"
    },
    html : {
        src: "src/index.html",
        dest: "dist/"
    },
    script: {
        src: "src/**/*.js",
        dest: "dist/js"
    }
}

function style() {

    return(
        gulp.src("src/scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.reload({stream: true}))
    );
}

function reload() {
    browserSync.reload();
}

function copyHTML(){
    return(
        gulp.src("src/index.html")
        .pipe(gulp.dest("dist/"))
    )
}

// Lint scripts
function js() {
    return gulp
      .src(["src/js/*.js"])
      .pipe(gulp.dest("dist/js"))
      .pipe(browserSync.stream())
    //   .pipe(plumber())
    //   .pipe(eslint())
    //   .pipe(eslint.format())
    //   .pipe(eslint.failAfterError());
  }
  
  // Transpile, concatenate and minify scripts
//   function scripts() {
//     return (
//       gulp
//         .src(["./js/**/*.js"])
//         .pipe(plumber())
//         // folder only, filename is specified in webpack config
//         .pipe(gulp.dest(".dist/js/"))
//         .pipe(browsersync.stream())
//     );
//   }

function watch(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch(paths.styles.src, style);
    gulp.watch(paths.html.src, copyHTML);
    gulp.watch(paths.script.src, js);
    gulp.watch(paths.html.dest, reload);

    // gulp.watch("./js/**/*", gulp.series(scriptsLint, scripts));
}


exports.style = style; //allows running from CLI.
exports.watch = watch;
exports.js = js;

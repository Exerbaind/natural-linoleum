let project_folder = "dist";
let source_folder = "src";

const fs = require("fs");

let path = {
  build: {
    html: `${project_folder}/`,
    css: `${project_folder}/style/`,
    js: `${project_folder}/script/`,
    api: `${project_folder}/api/`,
    images: `${project_folder}/assets/`,
    // icons: `${project_folder}/assets/icons`,
    fonts: `${project_folder}/fonts`,
  },
  src: {
    html: `${source_folder}/*.{html,htm}`,
    css: `${source_folder}/style/main.scss`,
    js: `${source_folder}/script/**/*.js`,
    api: `${source_folder}/api/**/*.js`,
    images: `${source_folder}/assets/**/*.{jpg,png,svg,gif,ico,webp,jpeg}`,
    // icons: `${source_folder}/assets/icons`,
    fonts: `${source_folder}/fonts/*.ttf`,
  },
  watch: {
    html: `${source_folder}/**/*.{html,htm}`,
    css: `${source_folder}/style/**/*.scss`,
    js: `${source_folder}/script/**/*.js`,
    api: `${source_folder}/api/**/*.js`,
    images: `${source_folder}/assets/images/**/*.{jpg,png,svg,gif,ico,webp,jpeg}`,
  },
  clean: `./${project_folder}/`,
};

let { src, dest } = require("gulp"),
  gulp = require("gulp"),
  browsersync = require("browser-sync").create(),
  fileInclude = require("gulp-file-include"),
  del = require("del"),
  scss = require("gulp-sass"),
  autoPrefixer = require("gulp-autoprefixer"),
  groupMediaQueries = require("gulp-group-css-media-queries"),
  cleanCSS = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  uglifyJS = require("gulp-uglify-es").default,
  babel = require("gulp-babel"),
  imageMin = require("gulp-imagemin"),
  ttf2woff = require("gulp-ttf2woff"),
  ttf2woff2 = require("gulp-ttf2woff2"),
  fonter = require("gulp-fonter");

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: `./${project_folder}/`,
    },
    port: 3000,
    notify: false,
  });
}

function html() {
  return src(path.src.html)
    .pipe(fileInclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function js() {
  return src(path.src.js)
    .pipe(fileInclude())
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(dest(path.build.js))
    .pipe(uglifyJS())
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function api() {
  return src(path.src.api)
    .pipe(fileInclude())
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(dest(path.build.api))
    .pipe(uglifyJS())
    .pipe(dest(path.build.api))
    .pipe(browsersync.stream());
}

function css() {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "expanded",
      })
    )
    .pipe(groupMediaQueries())
    .pipe(
      autoPrefixer({
        cascade: true,
        overrideBrowserslist: ["last 5 versions"],
      })
    )
    .pipe(dest(path.build.css))
    .pipe(cleanCSS())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function images() {
  return src(path.src.images)
    .pipe(
      imageMin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3,
      })
    )
    .pipe(dest(path.build.images))
    .pipe(browsersync.stream());
}

function fonts(params) {
  src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
  return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts));
}

function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.images], images);
  gulp.watch([path.watch.api], api);
}

function clean(params) {
  return del(path.clean);
}

function fontsStyle(params) {
  let file_content = fs.readFileSync(source_folder + "/style/fonts.scss");
  if (file_content == "") {
    fs.writeFile(source_folder + "/style/fonts.scss", "", cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split(".");
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(
              source_folder + "/style/fonts.scss",
              '@include font("' +
                fontname +
                '", "' +
                fontname +
                '", "400", "normal");\r\n',
              cb
            );
          }
          c_fontname = fontname;
        }
      }
    });
  }
}

function cb() {}

// Tasks
gulp.task("otf2ttf", function () {
  return src([`${source_folder}/fonts/*.otf`])
    .pipe(
      fonter({
        formats: ["ttf"],
      })
    )
    .pipe(dest(`${source_folder}/fonts/`));
});

let build = gulp.series(
  clean,
  gulp.parallel(css, html, js, images, fonts, api),
  fontsStyle
);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.html = html;
exports.css = css;
exports.js = js;
exports.api = api;
exports.images = images;
exports.fonts = fonts;
exports.fontsStyle = fontsStyle;
exports.build = build;
exports.watch = watch;
exports.default = watch;

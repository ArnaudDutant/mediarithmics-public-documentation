const gulp = require("gulp");
const run = require("gulp-run-command").default;
const gulpLoadPlugins = require("gulp-load-plugins");

const $ = gulpLoadPlugins();

gulp.task("gitbook-build", run("gitbook build --gitbook=3.2.3"));

gulp.task("gitbook-commit", () => {
    return gulp.src("./_book/**/*").pipe(
        $.ghPages({
            origin: "origin",
            branch: "gh-pages",
        })
    );
});

gulp.task("publish", () => {
    console.log("Publish Gitbook (_book) to Github Pages");
    return gulp.series("gitbook-build");
});

import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import plumber from "gulp-plumber";

gulp.task("sass", function() {
	return gulp
		.src("./src/**/*.{sass,scss}")
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest("./lib"));
});

gulp.task("watch-sass", function() {
	return gulp.watch("src/**/*.sass", ["sass"]);
});

import gulp from "gulp";
import sass from "gulp-sass";

gulp.task("sass", function() {
	return gulp
		.src("./src/**/*.sass")
		.pipe(sass())
		.pipe(gulp.dest("./src"));
});

gulp.task("watch-sass", function() {
	return gulp.watch("src/**/*.sass", ["sass"]);
});

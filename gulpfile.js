var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver-tdcode-examples', function() {
	gulp.src('./')
		.pipe(webserver({
			livereload: true
		}));
});


gulp.task('default', ['webserver-tdcode-examples']);
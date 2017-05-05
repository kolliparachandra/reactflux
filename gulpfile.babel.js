import gulp from 'gulp';
import connect from 'gulp-connect';//local web server
import open from  'gulp-open';//open an url in browser
import source from 'vinyl-source-stream';//used by gulp for converting files from file system to gulp way of stream
import uglify from 'gulp-uglify';//used by gulp for minification
import buffer from 'vinyl-buffer';//used in minification process
import concat from 'gulp-concat';//used to concat files
import eslint from 'gulp-eslint';//lint js files
import babel from 'gulp-babel';
import babelify from 'babelify';
var browserify = require('browserify');
var config ={
	port:9005, 
	devBaseUrl:'http://localhost', 
	paths:{
		html:'./src/*.html', 
		js:'./src/**/*.js',
		css:['node_modules/bootstrap/dist/css/bootstrap.min.css','node_modules/bootstrap/dist/css/bootstrap-theme.min.css','node_modules/toastr/build/toastr.css'],
		dest:'./dist',
		mainJS:'./src/main.js',
		images:'./src/images/*.*'
	}
}
//start a local development server
gulp.task('connect',function(){
	connect.server({
		root:['dist'],
		port:config.port,
		base:config.devBaseUrl,
		livereload:true
	});
});
gulp.task('open',['connect'],function(){
	gulp.src('dist/index.html')
	.pipe(open({
		uri:config.devBaseUrl + ':'+ config.port + '/'
	}));
});

gulp.task('html',function(){
	gulp.src(config.paths.html)
	.pipe(gulp.dest(config.paths.dest))
	.pipe(connect.reload());
});
gulp.task('browserify',function(){
	 var bundler = browserify(config.paths.mainJS);
	 bundler.transform(babelify);

	    bundler.bundle()
        .on('error', function (err) { console.error(err); })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        //.pipe(uglify()) // Use any gulp plugins you want now
        .pipe(gulp.dest(config.paths.dest + '/scripts'))
		.pipe(connect.reload())
});
gulp.task('css',function(){
	gulp.src(config.paths.css)
	.pipe(concat('bundle.css'))
	.pipe(gulp.dest(config.paths.dest + '/css'))

	
})

gulp.task('images',function(){
	gulp.src(config.paths.images)
	.pipe(gulp.dest(config.paths.dest + '/images'))
	.pipe(connect.reload())

	gulp.src('./src/favicon.ico')
	.pipe(gulp.dest(config.paths.dest))
})

gulp.task('lint',function(){
	// return gulp.src(config.paths.js)
	// .pipe(eslint())
	// .pipe(eslint.format())
})
gulp.task('watch',function(){
	gulp.watch(config.paths.html,['html']);
	gulp.watch(config.paths.js,['browserify','lint']);
})
gulp.task('default',['html','browserify','css','images','lint','open','watch']);

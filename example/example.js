/**
 * Created by Json on 2014/12/4.
 */
var fs = require( "fs" );

var sprite = require( "../lib/zach_sprite" ).sprite;
var compress = require( "../lib/zach_sprite" ).compress;
var files = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png"];
var files2 = ["img/f-0.png", "img/f-1.png", "img/f-2.png"];

sprite( {
	input : files,// 给出一个路径数组，如果文件不存在，则不会生成合并文件
	align : 2,// 默认是2
	padding : 4
}, function ( err, result ) {
	if ( err ) {
		console.log( err );
	}
	else {
		console.log( result );
		fs.writeFile( "out/resulte.png", result.data, function () {
		} );
		compress( {
			input : result.output,
			key : "<你的 key>"
		}, function ( err, result ) {
			if ( !err ) {
				console.log( result );
			}
			else {
				console.log( err );
			}
		} )
	}
} );
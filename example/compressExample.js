/**
 * Created by Json on 2015/3/25.
 */
var compress = require( "../lib/zach_sprite" ).compress;

var filePath = "img/1.png";
var key = "M1wU7QziatpdhbH7V-DzKRiALT0gm0OB";
compress( {
	input : filePath,// 需要压缩的文件名称
	key : key
}, function ( err, result ) {
	if ( !err ) {
		console.log( result );
	}
	else {
		console.log( err );
	}
} );
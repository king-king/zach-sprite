使用说明
=======

## Features 功能特性
* 图片合并。
* 图片压缩。

## Installation 安装
	$ npm install zach-sprite

除此之外，还需要安装
* images。

## API 接口

### sprite(args,callback)
示例：
```javascript
sprite( {
	input : files,// 给出需要合并的图片的路径，是一个数组。
	align : 2,// 会对合成图的尺寸以及子图的x、y取整。例如在ios上，图片的尺寸需要是2的整数倍，就可以设定align为2（align的默认值就是2）
	padding : 4// 有时候希望图片之间挨的不要太近，希望能够有一些距离，可以用padding来设置。
}, function ( err, result ) {
	if ( err ) {
		console.log( err );
	}
	else {
		console.log(result);
		/*
		result的格式：
		{
            "data" : // 生成的png的buffer，可以用wireFile直接写一个新的文件
            "width": 400,
            "height": 2080,
            "images": [
                {
                    "path" : "make.png",
                    "x": 0,
                    "y": 0,
                    "width": 394, // 输入图片的原始大小,不考虑padding和align
                    "height": 126
                },
                {
                    "path" : "record-tips.png",
                    "x": 0,
                    "y": 128,
                    "width": 381,
                    "height": 167
                }
            ]
        }
		*/
	}
} );
```

### compress(args,callback)
示例：
```javascript
compress( {
	input : filePath,// 需要压缩的文件名称
	key : key // 需要到tinypng网站去获取一个key码，填在这里
}, function ( err, result ) {
	if ( !err ) {
		console.log( result );
	}
	else {
		console.log( err );
	}
} )
/*
	result中包含压缩图片的url，想下载的话可以用如下代码：
	  https.get(result.url, function(response) {
          response.pipe(output);
        });
*/
```


说明：
* 图片压缩调用的是[tinypng网站](https://tinypng.com/)提供的图片压缩接口，该网站可以在不损质量的前提下大幅压缩png图片的体积，基本上压缩率可以达到50%。
  使用时候需要到该网站[获取key](https://tinypng.com/developers)
* 压缩接口每月前500次调用是免费的，之后会收费，具体规则见网站介绍
* 压缩的返回结果包含压缩率等信息、压缩图片的url等，由于下载耗时，所以没有把压缩图片的下载集成到compress里面，需要使用者得到url后自己写代码实现文件的下载（或者直接将url复制到浏览器地址栏，浏览器会自动下载）
* 返回的图片的url不是永久的，需要及时下载。具体规则见网站介绍

## 更多具体使用方法见example文件夹中的example.js文件
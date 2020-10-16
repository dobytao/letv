console.log("加载成功");
//一个.html页面独享一个js，配置要引入的js文件
require.config({
  paths: {
    "jquery": "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    "index":"index",
    "banner":"banner"
  },
  shim: {
    //设置依赖关系
    "jquery-cookie": ['jquery'],
    //parabola 不遵从amd规范
    parabola: {
      exports: "_"
    }
  }
})

require(["index","banner"], function(index,banner){
  index.move()
  banner.move()
  index.download()
  index.show()
  index.sor()
  
  
    //轮播图可以实现 
  })
define(["jquery"], function($){
  function move(){
    $(function () {
      var aBtns = $(".play").find("ol li");
      var oUl = $(".play").find("ul");
      var iNow = 0;
      var timer = null;

      $(".play").mouseenter(function () {
        clearInterval(timer);
        console.log("ting")
      });
      $(".play").mouseleave(function () {
        //轮播
        timer = setInterval(function () {
          iNow++;
          tab();
        }, 4000);
      });

      aBtns.click(function () {
        clearInterval(timer);
        iNow = $(this).index();
        tab();
      });

      //轮播
      timer = setInterval(function () {
        iNow++;
        tab();
      }, 4000);

      $(".p-lb").click(function(){
        clearInterval(timer);
        if(iNow==0 || iNow==3){
          iNow=2
        }else{
          iNow --
        }
        tab()
      })
      $(".p-rb").click(function(){
        clearInterval(timer);
        if(iNow==2){
          iNow=0
        }else{
          iNow ++
        }
        
        tab()
      })



      function tab() {
        aBtns.removeClass("active").eq(iNow).addClass("active");
        if (iNow == aBtns.size()) {
          aBtns.eq(0).addClass("active");
        }

        oUl.animate(
          {
            left: iNow * -1196,
          },
          600,
          function () {
            //判断是否是最后一张图片
            if (iNow === aBtns.size()) {
              iNow = 0;
              oUl.css("left", 0);
            }
          }
        );
        console.log(iNow)
      }
    });
  }

  return {
    move
  }
})

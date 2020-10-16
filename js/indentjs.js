define(['jquery', 'jquery-cookie'], function ($) {
  function sc_msg() {
    var cookieStr = $.cookie("goods");
    if (!cookieStr) {
      return;
    }else{
    //下载所有的商品数据
      $.ajax({
        url: "data/zong.json",
        success: function (arr) {
          var cookieArr = JSON.parse(cookieStr);
          
          //精益求精  写算法
          var newArr = [];
          for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < cookieArr.length; j++) {
              if (cookieArr[j].id == arr[i].id) {
                arr[i].num = cookieArr[j].num;
                newArr.push(arr[i]);
                break;
              }
            }
          }
          //通过newArr。处理数据，将数据添加页面上
          var str = ``;
          for (var i = 0; i < newArr.length; i++) {
            str += `<div class="cart-tbody" id="${newArr[i].id}">
                  <div class="item-list">
                    <div class="item-item item-seleted" id="${newArr[i].id}">
                      <div class="item-form">
                        <div class="cell p-checkbox">
                          <div class="cart-checkbox">
                            <input type="checkbox" id="check" name="checkItem" class="jdcheckbox" >
                            <span class="line-circle"></span>
                          </div>
                        </div>
                        <div class="cell p-goods">
                          <div class="goods-item">
                            <div class="p-img ">
                              <a href="#" target="_blank" rel="noreferrer" title="${newArr[i].recommendReason}">
                                <img src="${newArr[i].img}" alt=""></a></div>
                            <div class="p-msg">
                              <div class="p-name">
                                ${newArr[i].title}</div>
                              <div class="p-extend p-extend-new"></div>
                            </div>
                          </div>
                        </div>
                        <div class="cell p-price"><span class="p-price-cont">${newArr[i].price}元</span>
                          <p class="mt5"></p>
                        </div>
                        <div class="cell p-quantity">
                          <div class="cart-number quantity ">
                            <button class="cart-number-dec">-</button>
                            <div class="cart-input">
                              ${newArr[i].num}
                            </div>
                            <button class="cart-number-inc">+</button>
                          </div>
                        </div>
                        <div class="cell p-sum"><strong>${((newArr[i].price)*(newArr[i].num)).toFixed(2)}元</strong></div>
                        <div class="cell p-ops">
                          <a href="#none" class="p-ops-item">删除</a>
                        </div>
                        <div class="clr"></div>
                      </div>
                      <div class="product-extra mb10">
                        <div class="product-extra-cont"></div>
                      </div>
                      <div class="item-line"></div>
                      <div class="clear"></div>
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>`;
          }
          // $(".cart-main").html(str);
          $(".cart-main").append(str);
        },
        error: function (msg) {
          console.log(msg);
        }
      })
    }
  }
  function sc_num() {
          var cookieStr = $.cookie("goods");
          var sum = 0;
          if (cookieStr) {
            // var cookieArr = JSON.parse(cookieStr);
            var cookieArr = cookieStr;
            for (var i = 0; i < cookieArr.length; i++) {
              sum += cookieArr[i].num;
            }
          }
          $(".sc_right .sc_num").html(sum);
        }
        $(".cart-main").on("click", ".p-ops-item", function (){
          var id = $(this).closest(".cart-tbody").remove().attr("id");
          console.log(this)
          console.log(id)
          //删除页面上的节点 从cookie中删除数据
          var cookieArr = JSON.parse($.cookie("goods"));
          for (var i = 0; i < cookieArr.length; i++) {
            if (cookieArr[i].id == id) {
              cookieArr.splice(i, 1);
              break;
            }
          }
          if (cookieArr.length) {
            $.cookie("goods", JSON.stringify(cookieArr), {
              expires: 7
            })
          } else {
            $.cookie("goods", null);
          } //更新数据数量 
        })    
        $(".cart-main").on("click", ".cart-number button",function () {
          var id = $(this).closest(".cart-tbody").attr("id");
          var cookieArr = JSON.parse($.cookie("goods"));
          for (var i = 0; i < cookieArr.length; i++) {
            if (cookieArr[i].id == id) {
              break;
            }
          }
          if ( $(this).html() == "+" ) {
            $(this).siblings("button").removeAttr("disabled"); 
            cookieArr[i].num++; 
          }
          else if ($(this).siblings(".cart-input").html() <= 1) {
            $(this).attr("disabled","disabled")
          } 
          else if ( $(this).html() == "-" ) {
            cookieArr[i].num--;  
          }

          
          
          $.cookie("goods", JSON.stringify(cookieArr), {
            expires: 7
          }) //修改页面上的数量
          $(this).siblings(".cart-input").html(cookieArr[i].num);
          var price =parseFloat($(this).closest(".p-quantity").siblings(".p-price").children(".p-price-cont").html().trim()) 
          // console.log(price)
          $(this).closest(".p-quantity").siblings(".p-sum").html((price * cookieArr[i].num).toFixed(2)+ "元")
        })
  function checkFunc() {
    $("#checkAll").prop("checked", false);
    $("#checkAll").on("click", function () {
      if (this.checked) {
        $(".item-list").find(".p-checkbox .cart-checkbox").find(".jdcheckbox").prop("checked", true);
      } else {
        $(".item-list").find(".p-checkbox .cart-checkbox").find(".jdcheckbox").prop("checked", false);
      }
      
    });

    $("#cart-main").find(".p-checkbox .cart-checkbox").on('click', "#check",function () {
      // $("#checkAll").prop("checked", $(this).length = $(this).filter(":checked").length ? true : false);
      $("#cart-main").find(".t-checkbox .cart-checkbox").find("#checkAll").prop("checked", false);
      allchk() 
      console.log(this)
    });


    //获取选中选项的值 
    // $("#getValue").click(function(){ 
    //     var valArr = new Array; 
    //     $("#list :checkbox[checked]").each(function(i){ 
    //         valArr[i] = $(this).val(); 
    //     }); 
    //     var vals = valArr.join(','); 
    //       alert(vals); 
    // });
    //选项总个数
    
  }
  function allchk() {
      var chknum = $(".item-form").find(".p-checkbox .cart-checkbox").find(".jdcheckbox").size();
      var chk = 0;
      $(".item-form").find(".p-checkbox .cart-checkbox").find(".jdcheckbox").each(function () {
        if ($(this).attr("checked") == true) {
          chk++;
        }
      });
      console.log(allchk())
    }    
   
  return {
    checkFunc:checkFunc,
    sc_msg:sc_msg,
    sc_num:sc_num,
    allchk:allchk
  }
})
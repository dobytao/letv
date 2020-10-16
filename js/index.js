define(["parabola","jquery","jquery-cookie"],function(parabola,$){
    function move(){
        $(".help").mouseenter(function(){
            $(".help-box").css("display","block");
            $(".help").css("background","white");
            $(".help-box").css("border","1px solid #888888");
            $(".help-box").css("border-top","none");
            $(".help").find("a").css("color","black");
            $(".help").find(".icon-xiangxia").css("color","#2884C7")
            $(".help").find("a").mouseenter(function(){
                $(this).css("color","#2884C7")
            }).mouseleave(function(){
                $(this).css("color","black");
                
            })
        }).mouseleave(function(){
            $(".help-box").css("display","none");
            $(".help").css("background","#333");
            $(".help").find("a").css("color","white");
            $(".help").find(".icon-xiangxia").css("color","white")
        })

        $(".t-phone").mouseenter(function(){
            
            $(".phone-box").css("display","block");
            $(".t-phone").css("background","white");
            $(".t-phone").find("a").css("color","black");
            $(".t-phone").find(".icon-xiangxia").css("color","#2884C7")
            $(".phone-box").css("border","1px solid #888888");
            $(".phone-box").css("border-top","none");
            $(".t-phone").find("a").mouseenter(function(){
                $(this).css("color","#2884C7");
            }).mouseleave(function(){
                $(this).css("color","black");
                
            })
        }).mouseleave(function(){
            $(".phone-box").css("display","none");
            $(".t-phone").css("background","#333");
            $(".t-phone").find("a").css("color","white");
            $(".t-phone").find(".icon-xiangxia").css("color","white")
        })

    }

    function show(){
        $("#shuma").mouseenter(function(){
            $(".shuma").css("display","block")
            $(".shuma").mouseenter(function(){
                $(".shuma").css("display","block")
            }).mouseleave(function(){
                $(".shuma").css("display","none")
            })
            $(".shuma-list").on("mouseenter","a",function(){
                $(this).find(".text").css("color","#2884C7")
            }).on("mouseleave","a",function(){
                $(this).find(".text").css("color","black")
            })
        }).mouseleave(function(){
            $(".shuma").css("display","none")
        })

        $("#jiushui").mouseenter(function(){
            $(".jiushui").css("display","block")
            $(".jiushui").mouseenter(function(){
                $(".jiushui").css("display","block")
            }).mouseleave(function(){
                $(".jiushui").css("display","none")
            })
            $(".jiushui-list").on("mouseenter","a",function(){
                $(this).find(".text").css("color","#2884C7")
            }).on("mouseleave","a",function(){
                $(this).find(".text").css("color","black")
            })
        }).mouseleave(function(){
            $(".jiushui").css("display","none")
        })

        $("#shipin").mouseenter(function(){
            $(".shipin").css("display","block")
            $(".shipin").mouseenter(function(){
                $(".shipin").css("display","block")
            }).mouseleave(function(){
                $(".shipin").css("display","none")
            })
            $(".shipin-list").on("mouseenter","a",function(){
                $(this).find(".text").css("color","#2884C7")
            }).on("mouseleave","a",function(){
                $(this).find(".text").css("color","black")
            })
        }).mouseleave(function(){
            $(".shipin").css("display","none")
        })

        $("#meizhuang").mouseenter(function(){
            $(".meizhuang").css("display","block")
            $(".meizhuang").mouseenter(function(){
                $(".meizhuang").css("display","block")
            }).mouseleave(function(){
                $(".meizhuang").css("display","none")
            })
            $(".meizhuang-list").on("mouseenter","a",function(){
                $(this).find(".text").css("color","#2884C7")
            }).on("mouseleave","a",function(){
                $(this).find(".text").css("color","black")
            })
        }).mouseleave(function(){
            $(".meizhuang").css("display","none")
        })

        $("#fushi").mouseenter(function(){
            $(".fushi").css("display","block")
            $(".fushi").mouseenter(function(){
                $(".fushi").css("display","block")
            }).mouseleave(function(){
                $(".fushi").css("display","none")
            })
            $(".fushi-list").on("mouseenter","a",function(){
                $(this).find(".text").css("color","#2884C7")
            }).on("mouseleave","a",function(){
                $(this).find(".text").css("color","black")
            })
        }).mouseleave(function(){
            $(".fushi").css("display","none")
        })

        $("#muying").mouseenter(function(){
            $(".muying").css("display","block")
            $(".muying").mouseenter(function(){
                $(".muying").css("display","block")
            }).mouseleave(function(){
                $(".muying").css("display","none")
            })
            $(".muying-list").on("mouseenter","a",function(){
                $(this).find(".text").css("color","#2884C7")
            }).on("mouseleave","a",function(){
                $(this).find(".text").css("color","black")
            })
        }).mouseleave(function(){
            $(".muying").css("display","none")
        })

        $("#jiaju").mouseenter(function(){
            $(".jiaju").css("display","block")
            $(".jiaju").mouseenter(function(){
                $(".jiaju").css("display","block")
            }).mouseleave(function(){
                $(".jiaju").css("display","none")
            })
            $(".jiaju-list").on("mouseenter","a",function(){
                $(this).find(".text").css("color","#2884C7")
            }).on("mouseleave","a",function(){
                $(this).find(".text").css("color","black")
            })
        }).mouseleave(function(){
            $(".jiaju").css("display","none")
        })

        $(".play").mouseenter(function(){
            $(".p-lb").css("display","block")
            $(".p-rb").css("display","block")
        }).mouseleave(function(){
            $(".p-lb").css("display","none")
            $(".p-rb").css("display","none")
        })

        


    }

    function shopping(){
        sc_msg()
        $(".shopping-crad").mouseenter(function(){
            $(".side").stop(true).animate({right:"250px"},300)
        }).mouseleave(function(){
            $(".side").stop(true).animate({right:"0px"},300)
        })

        $.ajax({
            url:"data/zong.json",
            success:function(arr){
                var str = ''
                for(var i=0;i<arr.length;i++){
                    str +=`<li>
                    <div class="pic">
                        <a href=""><img src="${arr[i].img}" alt=""></a>
                    </div>
                    <div class="type"><strong>${arr[i].title}</strong></div>
                    <div class="price"><strong class="present"><span>¥${arr[i].price}</span></strong></div>
                    <div class="btn"><strong>
                        <a href="javasript:;" id=${arr[i].id} class="add">加入购物车</a>
                    </strong></div>
                </li>`
                }
                $(".mb-list").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })
        
        $(".mb-list").on("click",".add",function(){
            var id = this.id
            var first = $.cookie("goods") === null ? true : false;
            if(first){
                var arr = [{id:id,num:1}];
                $.cookie("goods",JSON.stringify(arr),{
                    expires:7
                })
                
            }else{
                var cookieArr = JSON.parse($.cookie("goods"));
                var same = false
                for(var i=0 ;i<cookieArr.length;i++){
                    if(cookieArr[i].id == id){
                        same = true
                        break
                    }
                }

                if(same){
                    cookieArr[i].num++;
                    console.log(cookieArr[i].num)
                }else{
                    cookieArr.push({id:id,num:1})
                }
                $.cookie("goods",JSON.stringify(cookieArr),{expires:7})
            }
            sc_msg()
        })
        
            
        
    }

    function sc_msg(){
         $.ajax({
             url:"data/zong.json",
             success:function(arr){
                var cookieStr = $.cookie("goods")
                var newArr = []
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr)
                    for(var i=0;i<arr.length;i++){
                        for(var j=0;j<cookieArr.length;j++){
                            if(arr[i].id == cookieArr[j].id){
                                arr[i].type = cookieArr[j].title
                                arr[i].price = cookieArr[j].price
                                arr[i].num = cookieArr[j].num
                                newArr.push(arr[i])
                                break;
                            }
                        }
                    }
                    var str = ''
                    for(var i=0;i<newArr.length;i++){
                        str +=`<li id="${newArr[i].id}">
                        <div class="bl-img">
                            <img src="${newArr[i].img}" alt="">
                        </div>
                        <div class="bl-right">
                            <p class="bl-type">${newArr[i].title}</p>
                            <p class="bl-pic">￥91.9</p>
                            <div class="jiajian">-</div><div class="num">${newArr[i].num}</div><div class="jiajian">+</div>
                            <div class="buy"><a href="shopping.html">购买</a></div>
                            <div class="delete">删除</div>
                        </div>
                    </li>`
                    }
                    $(".board-list").html(str)

                }
             },
             error:function(msg){
                console.log(msg)
             }
         })


         


    }

    function sc_num(){
        $(".board-list").on("click",".delete",function(){
            var id = $(this).closest("li").remove().attr("id")
            var cookieArr = JSON.parse($.cookie("goods"))
            for(var i=0 ;i<cookieArr.length;i++){
                if(cookieArr[i].id == id){
                    cookieArr.splice(i,1)
                    break
                }
            }
            if(cookieArr.length == 0){
                $.cookie("goods",null)
            }else{
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })
            }
            sc_msg()
         })

         $(".board-list").on("click",".jiajian",function(){
            var id = $(this).closest("li").attr("id")
            var cookieArr = JSON.parse($.cookie("goods"))
            var index = cookieArr.findIndex(item => item.id == id)
            if(this.innerHTML == "+"){
                cookieArr[index].num++
            }else{
                cookieArr[index].num == 1 ? alert("数量为1，不能减少") : cookieArr[index].num--
            }
            $(this).siblings(".num").html(cookieArr[index].num)
            $.cookie("goods",JSON.stringify(cookieArr),{
                expires:7
            })
            sc_msg()
         })


    }


    function download(){
        $.ajax({
            url : "data/shuma.json",
            success:function(arr){
                var str ='';
                for(var i=0;i<arr.length;i++){
                    str +=`<li>
                    <a href="">
                        <img src="${arr[i].img}" alt="">
                        <div class="text">${arr[i].title}</div>
                    </a>
                </li>`
                }
                $(".shuma-list").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        $.ajax({
            url : "data/jiushui.json",
            success:function(arr){
                var str ='';
                for(var i=0;i<arr.length;i++){
                    str +=`<li>
                    <a href="">
                        <img src="${arr[i].img}" alt="">
                        <div class="text">${arr[i].title}</div>
                    </a>
                </li>`
                }
                $(".jiushui-list").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })
        
        $.ajax({
            url : "data/shipin.json",
            success:function(arr){
                var str ='';
                for(var i=0;i<arr.length;i++){
                    str +=`<li>
                    <a href="">
                        <img src="${arr[i].img}" alt="">
                        <div class="text">${arr[i].title}</div>
                    </a>
                </li>`
                }
                $(".shipin-list").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        $.ajax({
            url : "data/meizhuang.json",
            success:function(arr){
                var str ='';
                for(var i=0;i<arr.length;i++){
                    str +=`<li>
                    <a href="">
                        <img src="${arr[i].img}" alt="">
                        <div class="text">${arr[i].title}</div>
                    </a>
                </li>`
                }
                $(".meizhuang-list").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        $.ajax({
            url : "data/fushi.json",
            success:function(arr){
                var str ='';
                for(var i=0;i<arr.length;i++){
                    str +=`<li>
                    <a href="">
                        <img src="${arr[i].img}" alt="">
                        <div class="text">${arr[i].title}</div>
                    </a>
                </li>`
                }
                $(".fushi-list").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        $.ajax({
            url : "data/muying.json",
            success:function(arr){
                var str ='';
                for(var i=0;i<arr.length;i++){
                    str +=`<li>
                    <a href="">
                        <img src="${arr[i].img}" alt="">
                        <div class="text">${arr[i].title}</div>
                    </a>
                </li>`
                }
                $(".muying-list").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        $.ajax({
            url : "data/jiaju.json",
            success:function(arr){
                var str ='';
                for(var i=0;i<arr.length;i++){
                    str +=`<li>
                    <a href="">
                        <img src="${arr[i].img}" alt="">
                        <div class="text">${arr[i].title}</div>
                    </a>
                </li>`
                }
                $(".jiaju-list").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        
        $.ajax({
            url : "data/919.json",
            success:function(arr){
                var str ='';
                for(var i=0;i<arr.length;i++){
                    str +=`<li>
                    <div class="label">
                        <span style="background-color:#ed1c24">919均价</span>
                    </div>
                    <div class="pic">
                        <a href="commodity.html?id#${arr[i].id}"><img src="${arr[i].img}" alt=""></a>
                    </div>
                    <div class="type">
                        <strong>${arr[i].title}</strong>
                    </div>
                    <p class="desc">${arr[i].intro}</p>
                    <div class="price">
                        <strong class="present"><span>￥${arr[i].price}</span></strong>
                       <em class="original"><span>${arr[i].discount}</span></em>
                    </div>
                    <div class="btn">
                        <strong><a href="list.html">立即购买</a></strong>
                    </div>
                </li>`
                }
                $(".sbb-right-one").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        $.ajax({
            url : "data/9.9.json",
            success:function(arr){
                var str ='';
                for(var i=0;i<arr.length;i++){
                    str +=`<li>
                    <div class="label">
                        <span style="background-color:#3ece17">9.9包邮</span>
                    </div>
                    <div class="pic">
                        <a href="commodity.html?id#${arr[i].id}"><img src="${arr[i].img}" alt=""></a>
                    </div>
                    <div class="type">
                        <strong>${arr[i].title}</strong>
                    </div>
                    <p class="desc">${arr[i].intro}</p>
                    <div class="price">
                        <strong class="present"><span>￥${arr[i].price}</span></strong>
                       <em class="original"><span>${arr[i].discount}</span></em>
                    </div>
                    <div class="btn">
                        <strong><a href="list.html">立即购买</a></strong>
                    </div>
                </li>`
                }
                $(".sbb-right-two").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        $.ajax({
            url : "data/sup.json",
            success:function(arr){
                var str ='';
                for(var i=0;i<arr.length;i++){
                    str +=`<li>
                    <div class="list-label">
                        <span class="l-span-left"  style="background-color: #ed1c24;">下单即送</span>
                        <span class="l-span-right" style="background-color: #f2a705;">9月特卖</span>
                    </div>
                    <div class="list-pic">
                        <a href="commodity.html?id#${arr[i].id}"><img src="${arr[i].img}" alt=""></a>
                    </div>
                    <div class="list-type">
                        <strong>${arr[i].title}</strong>
                    </div>
                    <p class="list-p">${arr[i].intro}</p>
                    <div class="list-price">
                        <strong class="present"><span>${arr[i].price}</span></strong>
                        <em class="original"><span>${arr[i].discount}</span></em>
                    </div>
                    <div class="list-btn">
                        <strong>
                            <a class="know" href="" target="_blank">了解产品</a>
                            <a class="buy" href="list.html" target="_blank">立即购买</a>
                    </strong>
                    </div>
                </li>`
                }
                $(".sbb-list").append(str)
               
            },
            error:function(msg){
                console.log(msg)
            }
        })

        $.ajax({
            url : "data/jing.json",
            success:function(arr){
                var str ='';
                for(var i=0;i<arr.length;i++){
                    str +=`<li>
                    <div class="label">
                        <span style="background-color:#ed1c24">919均价</span>
                    </div>
                    <div class="pic">
                        <a href="commodity.html?id#${arr[i].id}"><img src="${arr[i].img}" alt=""></a>
                    </div>
                    <div class="type">
                        <strong>${arr[i].title}</strong>
                    </div>
                    <p class="desc">${arr[i].intro}</p>
                    <div class="price">
                        <strong class="present"><span>￥${arr[i].price}</span></strong>
                       <em class="original"><span>${arr[i].discount}</span></em>
                    </div>
                    <div class="btn">
                        <strong><a href="list.html">立即购买</a></strong>
                    </div>
                </li>`
                }
                $(".sbb-right-three").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })
        
       




    }

    function sor(){
        $(window).scroll(function(){
            var distance = $(window).scrollTop();
            if(distance >0){
                $(".backtop").css("display","block")
            }else if(distance == 0){
                $(".backtop").css("display","none")
            }
        })
    }

    function loupe(){

          $.ajax({
            url : "data/zong.json",
            success:function(arr){
                var id = window.location.hash;
                id = id.substr(1);
                var str ='';
                for(var i=0;i<arr.length;i++){
                    if(id == arr[i].id){
                        str =`<div id="small">
                        <img src="${arr[i].img}" alt="" />
                        <div id="mark"></div>
                    </div>
                    <div id="big">
                        <img src="${arr[i].img}" alt="" />
                    </div>
                    <div class="main-right">
                        <h2 class="type">${arr[i].title}</h2>
                        <p class="intro">${arr[i].intro}</p>
                        <div class="pic">￥${arr[i].price}</div>
                        <div class="buy" id="${arr[i].id}">加入购物车</div>
                    </div>`
                    }
                }
                $(".main-box").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        $(".main-box").on("mouseenter","#small",function(){
            $("#mark,#big").show();
        }).on("mouseleave","#small",function(){
            $("#mark,#big").hide();
        }).on("mousemove","#small",function(ev){
            var l = ev.clientX - $(this).offset().left - 100;
            l = Math.max(0, l);
            l = Math.min(l, 200);
            var t = ev.clientY - $(this).offset().top - 100;
            t = Math.max(0, t);
            t = Math.min(t, 200);
            $("#mark").css({
              left: l,
              top: t
            })
            $("#big img").css({
              left: -2 * l,
              top: -2 * t
            })
        })

        $(".main-box").on("click",".buy",function(){
            var id = this.id
            var first = $.cookie("goods") === null ? true : false;
            if(first){
                var arr = [{id:id,num:1}];
                $.cookie("goods",JSON.stringify(arr),{
                    expires:7
                })
                
            }else{
                var cookieArr = JSON.parse($.cookie("goods"));
                var same = false
                for(var i=0 ;i<cookieArr.length;i++){
                    if(cookieArr[i].id == id){
                        same = true
                        break
                    }
                }

                if(same){
                    cookieArr[i].num++;
                    console.log(cookieArr[i].num)
                }else{
                    cookieArr.push({id:id,num:1})
                }
                $.cookie("goods",JSON.stringify(cookieArr),{expires:7})
            }
            alert("加入成功")
            sc_msg()

        })
    }

    function register(){
        $("#register").click(function(){
            $.ajax({
                type: 'post',
                url: "register.php",
                data: {
                  username: $(".u-ipt").val(),
                  password: $(".p-ipt").val(),
                  createTime: Date.now()  //获取当前时间毫秒数  时间戳
                },
                success: function(result){
                    var str = JSON.parse(result)
                    var check = $("#xieyi-btn").prop("checked")
                    if(check == true){
                            if(str.code == 1){
                            alert("用户名不能为空")
                        }else if(str.code == 2){
                            alert("密码不能为空")
                        }else if(str.code == 4){
                            alert("用户名已存在")
                        }else if(str.code == 5){
                            alert("服务器忙")
                        }else{
                            var phone = /^1[34578]\d{9}$/
                            var pass = /[a-zA-Z0-9]{6,20}/
                            var registeruser = phone.test($(".u-ipt").val())
                            if(registeruser == false){
                                alert("请输入手机号")
                            }else if(registeruser == true){
                                var registerpass = pass.test($(".p-ipt").val())
                                if(registerpass == false){
                                    alert("请输入符合要求的密码")
                                }else if(registerpass == true){
                                    alert("注册成功")
                                }
                            }
                        }
                    }else{
                        alert("请同意协议")
                    }
                  
                    

                },
                error: function(msg){
                  console.log(msg)
                }
              })
        })
    }


    function login(){
        $("#login").click(function(){
            $.ajax({
                type: 'post',
                url: "login.php",
                data: {
                  username: $(".u-ipt").val(),
                  password: $(".p-ipt").val(),
                  createTime: Date.now()  //获取当前时间毫秒数  时间戳
                },
                success: function(result){
                    var str = JSON.parse(result)
                            if(str.code == 1){
                            alert("用户名不能为空")
                        }else if(str.code == 2){
                            alert("密码不能为空")
                        }else if(str.code == 3){
                            alert("用户名或密码错误")
                        }else{
                            alert(str.msg)
                        }
                },
                error: function(msg){
                  console.log(msg)
                }
              })
        })
    }
    
    return {
        move,
        download,
        show,
        sor,
        shopping,
        sc_msg,
        sc_num,
        loupe,
        register,
        login
    }
})
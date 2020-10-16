<?php
  header("Content-type:text/html;charset=utf-8");
  //模拟官方的请求状态返回格式
  $responseData = array("code" => 0, "msg" => "");

  //取出我们提交过来的数据
  $username = $_POST['username'];
  $password = $_POST['password'];
  $createTime = $_POST['createTime'];

  //我们需要对我们提交过来的数据，做一个简单的验证
  if(!$username){
    $responseData['code'] = 1;
    $responseData['msg'] = "用户名不能为空";
    echo json_encode($responseData);
    exit;
  }

  if(!$password){
    $responseData['code'] = 2;
    $responseData['msg'] = "密码不能为空";
    echo json_encode($responseData);
    exit;
  }


  //验证用户名是否重名
  //1、链接数据库
  $link = mysqli_connect("127.0.0.1", "root", "root");

  //2、判断数据库是否链接成功
  if(!$link){
    echo "数据库链接失败";
    exit; //退出程序
  }

  //3、设置访问字符集
  mysqli_set_charset($link, "utf8");

  //4、选择我们要访问数据库
  mysqli_select_db($link, "letv");

  //5、准备sql
  $sql1 = "SELECT * FROM user WHERE username='{$username}'";

  //6、发送sql语句
  $res = mysqli_query($link, $sql1);  //mysql_Result

  //取出一行数据
  $row = mysqli_fetch_assoc($res);

  if($row){
    $responseData['code'] = 4;
    $responseData['msg'] = "用户名已存在";
    echo json_encode($responseData);
    exit;
  }

  //加密
  $str = md5(md5(md5($password).'qingdao')."qianfeng");

  //进行注册操作
  $sql2 = "INSERT INTO user(username,password,createTime) VALUES('{$username}','{$str}',{$createTime})";

  $res2 = mysqli_query($link, $sql2);

  if(!$res2){ //<1> 检查sql  <2> 检查数据库字段
    $responseData['code'] = 5;
    $responseData['msg'] = "服务器忙";
    echo json_encode($responseData);
    exit;
  }

  $responseData['msg'] = "注册成功";
  echo json_encode($responseData);

  mysqli_close($link);

?>

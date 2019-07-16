function btnOnclick(){
	var name =$("#form-username").attr("value");

	alert("username is "+obusernamej);
	return;
}

function login(){
	var name1 = $("#form-username").val();    //用户名
	var pwd1 = $("#form-password").val();      //密码

	var datas = new Object();                  //返回来的结果
	var data={username:name1,password:pwd1}
	$.ajax({
		type: "post",
		url : "/mmall/user/login.do",
		async:false,
		data:data,
		dataType:"json",
		contentType:"application/x-www-form-urlencoded",
		success: function (data) {   
			if(data.status==1){
				$(location).prop('href', '../page/success.html')
			}else{
				alert("登录失败");
				return;
			}	
		}   
	});

}


function loginCheck(){
	var name = $("#form-username").attr("value");    //用户名
	var pwd = $("#form-password").attr("value");      //密码

	var name1 = $("#form-username").val();    //用户名
	var pwd1 = $("#form-password").val();      //密码

	var datas = new Object();                  //返回来的结果
	var data={username:name1,password:pwd1}

	// $.ajax({  
	// 	type: "post",  
	// 	contentType:"application/string",
	// 	dataType:"json",
	// 	async:false,
	// 	url : "/mmall/user/login.do",
	// 	data:data,
	// 	success: function (data) {   

	// 		datas = eval("("+data+")");
			
	// 	}   
	// });

	 var xhr=new XMLHttpRequest();
	 xhr.open('post','/mmall/user/login.do',true);
	 xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	 xhr.send("username="+name1+"&password="+pwd1)
	 xhr.onreadystatechange=function(){
	 	if(xhr.readyState==4){
	 		if(xhr.status==200){
				 var txt=xhr.responseText;
				 console.log(txt);
	 		}
		
		 }
		 
	 }

	$.ajax({
		url:"/mmall/user/login.do",
		type:"post",
		data:data,
	   contentType:"application/json;charset=utf-8",
	   success:function(data){
		   alert(data.id+":"+data.name);
	   }

	})




	if(datas.status == "1"){                 //用户名不正确
		layer.tips('用户名不存在！', '#loginUser', {
			tips: [2, '#FF3030'],
			time: 2000
		});
		return false;
	}else if(datas.result == "pwdFalse"){            //密码不正确
		
		layer.tips('密码不正确	！', '#loginPwd', {
			tips: [2, '#FF3030'],
			time: 2000
		});
		return false;
	}else{
		return true;
	}


}

function checkdata(){
	$.getJSON("http://localhost:8080/mmall/user/login.do").then(
		function(result){
		console.log(result);
	})


	$(location).prop('href', '../page/success.html')
}
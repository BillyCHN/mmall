webpackJsonp([13],{0:function(e,r,t){e.exports=t(77)},1:function(e,r,t){"use strict";var o=t(4),n={serverHost:""},s={request:function(e){var r=this;$.ajax({type:e.method||"get",url:e.url||"",dataType:e.type||"json",data:e.data||"",success:function(t){0===t.status?"function"==typeof e.success&&e.success(t.data,t.msg):10===t.status?r.doLogin():1===t.status&&"function"==typeof e.error&&e.error(t.msg)},error:function(r){"function"==typeof e.error&&e.error(r.statusText)}})},getServerUrl:function(e){return n.serverHost+e},getUrlParam:function(e){var r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(r);return t?decodeURIComponent(t[2]):null},renderHtml:function(e,r){var t=o.compile(e),n=t.render(r);return n},successTips:function(e){alert(e||"操作成功！")},errorTips:function(e){alert(e||"哪里不对了~")},validate:function(e,r){var e=$.trim(e);return"require"===r?!!e:"phone"===r?/^1\d{10}$/.test(e):"email"===r?/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(e):void 0},doLogin:function(){window.location.href="./user-login.html?redirect="+encodeURIComponent(window.location.href)},goHome:function(){window.location.href="./index.html"}};e.exports=s},2:function(e,r,t){"use strict";var o=t(4),n={serverHost:""},s={request:function(e){var r=this;$.ajax({type:e.method||"get",url:e.url||"",dataType:e.type||"json",data:e.data||"",success:function(t){0===t.status?"function"==typeof e.success&&e.success(t.data,t.msg):10===t.status?r.doLogin():1===t.status&&"function"==typeof e.error&&e.error(t.msg)},error:function(r){"function"==typeof e.error&&e.error(r.statusText)}})},getServerUrl:function(e){return n.serverHost+e},getUrlParam:function(e){var r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(r);return t?decodeURIComponent(t[2]):null},renderHtml:function(e,r){var t=o.compile(e),n=t.render(r);return n},successTips:function(e){alert(e||"操作成功")},errorTips:function(e){alert(e||"哪里不对了～～")},validate:function(e,r){var e=$.trim(e);return"require"===r?!!e:"phone"===r?/^1\d{10}$/.test(e):"email"===r?/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(e):void 0},doLogin:function(){window.location.href="./user-login.html?redirect="+encodeURIComponent(window.location.href)},goHome:function(){window.location.href="./index.html"}};e.exports=s},3:function(e,r,t){"use strict";var o=t(2),n={register:function(e,r,t){o.request({url:o.getServerUrl("/user/register.do"),data:e,method:"POST",success:r,error:t})},login:function(e,r,t){o.request({url:o.getServerUrl("/user/login.do"),data:e,method:"POST",success:r,error:t})},logout:function(e,r){o.request({url:o.getServerUrl("/user/logout.do"),method:"POST",success:e,error:r})},checkUsername:function(e,r,t){o.request({url:o.getServerUrl("/user/check_valid.do"),data:{type:"username",str:e},method:"POST",success:r,error:t})},checkLogin:function(e,r){o.request({url:o.getServerUrl("/user/get_user_info.do"),method:"POST",success:e,error:r})},getQuesion:function(e,r,t){o.request({url:o.getServerUrl("/user/forget_get_question.do"),data:{username:e},method:"POST",success:r,error:t})},checkQuestionAnswer:function(e,r,t){o.request({url:o.getServerUrl("/user/forget_check_answer.do"),data:e,method:"POST",success:r,error:t})},getUserInfo:function(e,r){o.request({url:o.getServerUrl("/user/get_information.do"),method:"POST",success:e,error:r})},updateUserInfo:function(e,r,t){o.request({url:o.getServerUrl("/user/update_information.do"),data:e,method:"POST",success:r,error:t})},updatePasswordInfo:function(e,r,t){o.request({url:o.getServerUrl("/user/reset_password.do"),data:e,method:"POST",success:r,error:t})}};e.exports=n},13:function(e,r){},14:function(e,r,t){"use strict";t(13)},39:function(e,r){},77:function(e,r,t){"use strict";t(39),t(14);var o=t(3),n=t(1),s={show:function(e){$(".error-item").show().find(".err-msg").text(e)},hide:function(){$(".error-item").hide().find(".err-msg").text("")}},i={init:function(){this.bindEvent()},bindEvent:function(){var e=this;$("#username").blur(function(){var e=$.trim($(this).val());e&&o.checkUsername(e,function(e){s.hide()},function(e){s.show(e)})}),$("#submit").click(function(){e.submit()}),$(".user-content").keyup(function(r){13===r.keyCode&&e.submit()})},submit:function(){var e={username:$.trim($("#username").val()),password:$.trim($("#password").val()),passwordConfirm:$.trim($("#password-confirm").val()),phone:$.trim($("#phone").val()),email:$.trim($("#email").val()),question:$.trim($("#question").val()),answer:$.trim($("#answer").val())},r=this.formValidate(e);r.status?o.register(e,function(e){window.location.href="./result.html?type=register"},function(e){s.show(e)}):s.show(r.msg)},formValidate:function(e){var r={status:!1,msg:""};return n.validate(e.username,"require")?n.validate(e.password,"require")?e.password.length<6?(r.msg="密码长度不能少于6位",r):e.password!==e.passwordConfirm?(r.msg="两次输入的密码不一致",r):n.validate(e.phone,"phone")?n.validate(e.email,"email")?n.validate(e.question,"require")?n.validate(e.answer,"require")?(r.status=!0,r.msg="验证通过",r):(r.msg="密码提示问题答案不能为空",r):(r.msg="密码提示问题不能为空",r):(r.msg="邮箱格式不正确",r):(r.msg="手机号格式不正确",r):(r.msg="密码不能为空",r):(r.msg="用户名不能为空",r)}};$(function(){i.init()})}});
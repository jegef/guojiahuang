<template>
    <div id="login">
        <!-- 用户登录界面 -->
		<div class="login">
            <p id="showTips"></p>
			<h2>用户登录</h2>
			<div class="login_box">
				<input type="text" id='name' maxlength='20' v-focus/>
				<label for="name">账号</label>
			</div>
			<div class="login_box">
				<input type="password" id='pwd' maxlength='20'>
				<label for="pwd">密码</label>
			</div>
			<a class="login-a">登录<span></span><span></span><span></span><span></span></a>
			<a class="enroll-a">注册<span></span><span></span><span></span><span></span></a>
		</div>
 
		<!-- 用户注册界面 -->
		<div class="login enroll" v-show="false">
			<h2>用户注册</h2>
			<div class="login_box">
				<input type="text" id="name1" maxlength='20'/>
				<label for="name">注册账号</label>
			</div>
			<div class="login_box">
				<input type="password" id="pwd1" maxlength='20'>
				<label for="pwd">注册密码</label>
			</div>
			<a class="login-b">登录<span></span><span></span><span></span><span></span></a>
			<a class="enroll-b">注册<span></span><span></span><span></span><span></span></a>
		</div>
    </div>
</template>
<script>
import $ from 'jquery';
import router from '../router/index';
// import { setTimeout } from 'timers';
export default{
    data(){
        return {
            showTips: false
        }
    },
    setup(){
        $(() => {
            // 登录注册界面切换事件
            $('.enroll-a').click(() => {
                $('.login').hide();
                $('.enroll').show();
            })
            $('.login-b').click(() => {handoff()})
            const handoff = () => {
                $('.login').show();
                $('.enroll').hide();
            }
        
            // 判断登录账号与密码是否正确事件
            $('.login-a').click(() => {
                const name = $('#name').val();
                const pwd = $('#pwd').val();
                let account = localStorage.getItem('account');
                let password = localStorage.getItem('password');
                if (!name || !pwd) {
                    alert('账号或密码不能为空！！！');
                } else if (name == account && pwd == password || name == 666 && pwd == 888) { // 666与888是默认登录账号与密码（可修改或删除）
                    alert('登录成功！');                   
                    localStorage.setItem('captcha', 1);                   
                    router.push('/student/main');                    
                    $('.login').hide();
                } else {
                    alert('账号或密码错误！！！');
                }
            })
        
            // 注册事件储存账号与密码数据
            $('.enroll-b').click(() => {
                const name1 = $('#name1').val();
                const pwd1 = $('#pwd1').val();
                if (!name1 || !pwd1) {
                    alert('账号与密码不能为空！！！');
                } else {
                    localStorage.setItem('account', name1);
                    localStorage.setItem('password', pwd1);
                    // alert('注册成功！');
                    $('#showTips').text('注册成功！');
                    handoff();
                    $('#name').val(name1);
                    $('#pwd').val(pwd1);
                }
            })
            
  

	// 判断以前是否登录过，如果是就免登录( 20 表示用户免登录20次就要登录一次 （可修改）)
	const detect = () => {
		if (!localStorage.getItem('captcha')) {
			const recording = localStorage.getItem('captcha') + 1;
			localStorage.setItem('captcha', recording);
			$('.login').hide();
			
		}
	}
	detect();
})
    }
}
</script>
<style>
.login {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	padding: 40px;
    margin-left: 400px;
    margin-top: 150px;
	background-color: rgba(3, 2, 10, 0.4);
	box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
}
 
.login h2 {
	color: #fff;
	margin-bottom: 30px;
}
 
.login .login_box {
	position: relative;
	width: 100%;
}
 
.login .login_box input {
	outline: none;
	border: none;
	width: 100%;
	padding: 10px 0;
	margin-bottom: 30px;
	color: #fff;
	font-size: 16px;
	border-bottom: 1px solid #fff;
	background-color: transparent;
}
 
.login .login_box label {
	position: absolute;
	top: 0;
	left: 0;
	padding: 10px 0;
	color: #fff;
	pointer-events: none;
	transition: all 0.5s;
}
 
.login .login_box input:focus+label,
.login .login_box input:valid+label {
	top: -20px;
	color: #03e9f4;
	font-size: 12px;
}
 
.login a {
	position: relative;
	padding: 10px 20px;
	color: #03e9f4;
	text-decoration: none;
	transition: all 0.5s;
}
 
.login a:hover {
	color: #fff;
	border-radius: 5px;
	background-color: #03e9f4;
	box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
}
 
.login a span {
	position: absolute;
}
 
.login a span:first-child {
	top: 0;
	left: -100%;
	width: 100%;
	height: 2px;
	background: linear-gradient(to right, transparent, #03e9f4);
	animation: move1 1s linear infinite;
}
 
.login a span:nth-child(2) {
	right: 0;
	top: -100%;
	width: 2px;
	height: 100%;
	background: linear-gradient(transparent, #03e6f4);
	animation: move2 1s linear 0.25s infinite;
}
 
.login a span:nth-child(3) {
	right: -100%;
	bottom: 0;
	width: 100%;
	height: 2px;
	background: linear-gradient(to left, transparent, #03e9f4);
	animation: move3 1s linear 0.5s infinite;
}
 
.login a span:last-child {
	left: 0;
	bottom: -100%;
	width: 2px;
	height: 100%;
	background: linear-gradient(#03e9f4, transparent);
	animation: move4 1s linear 0.75s infinite;
}
 
.login-a {
	position: absolute;
	left: 90px;
	bottom: 0px;
	cursor: pointer;
}
 
.enroll-a {
	position: absolute;
	left: -110px;
	bottom: 40px;
	cursor: pointer;
}
 
.login-b {
	position: absolute;
	left: -110px;
	bottom: 0px;
	cursor: pointer;
}
 
.enroll-b {
	position: absolute;
	left: 90px;
	bottom: 40px;
	cursor: pointer;
}
 
@keyframes move1 {
	0% {
		left: -100%;
	}
 
	50%,
	100% {
		left: 100%;
	}
}
 
@keyframes move2 {
	0% {
		top: -100%;
	}
 
	50%,
	100% {
		top: 100%;
	}
}
 
@keyframes move3 {
	0% {
		right: -100%;
	}
 
	50%,
	100% {
		right: 100%;
	}
}
 
@keyframes move4 {
	0% {
		bottom: -100%;
	}
 
	50%,
	100% {
		bottom: 100%;
	}
}
 
iframe {
	width: 100%;
	height: 100%;
	border: 0px;
	background-color: white;
}
#showTips {
    color: #07f422;
}
</style>
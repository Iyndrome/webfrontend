var loginform = document.getElementById("loginform");

var email = document.getElementById("email");
var userpw = document.getElementById("userpw");

var msg = document.getElementById("msg");

loginform
		.addEventListener(
				"submit",
				function(event) {
					msg.innerHTML = '';
					var flag = false;
					if (email.value.trim().length < 1) {
						msg.innerHTML = '이메일은 필수 입력입니다.<br/>';
						flag = true;
					} else {
						var emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
						if (!emailRegExp.test(email.value.trim())) {
							msg.innerHTML = '잘못된 이메일 형식입니다.<br/>';
							flag = true;
						}
					}
					if (userpw.value.trim().length < 1) {
						msg.innerHTML += '비밀번호는 필수 입력입니다.<br/>';
						flag = true;
					}

					if (flag == true) {
						event.preventDefault();
					}
				});

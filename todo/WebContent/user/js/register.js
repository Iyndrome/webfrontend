var mainbtn = document.getElementById("mainbtn");
var loginbtn = document.getElementById("loginbtn");

var registerform = document.getElementById("registerform");

var email = document.getElementById("email");
var userpw = document.getElementById("userpw");
var userpw1 = document.getElementById("userpw1");
var nickname = document.getElementById("nickname");
var msg = document.getElementById("msg");

/* 이미지 미리보기 */
document.getElementById("myimage").addEventListener("change", function() {
	readURL(this);
})

function readURL(input) {
	if (input.files && input.files[0]) {
		var filename = input.files[0].name;

		var reader = new FileReader();

		reader.addEventListener("load", function(e) {
			document.getElementById('img').src = e.target.result;
		});

		reader.readAsDataURL(input.files[0]);
	}
}

/* 버튼을 눌렀을 때 다른 곳으로 이동 */
mainbtn.addEventListener("click", function(event) {
	location.href = "../index.html";
});

loginbtn.addEventListener("click", function(event) {
	location.href = "login.html";
});

/* 폼의 데이터를 전송할 때 데이터 유효성 검사 */
registerform
		.addEventListener(
				"submit",
				function(event) {
					msg.innerHTML = '';
					var flag = false;
					if (email.value.trim().length < 1) {
						msg.innerHTML = '이메일은 필수 입력입니다.<br/>';
						flag = true;
					} else {
						//정규식을 이용한 유효성 검사
						//정규식은 문자열의 패턴을 만드는 객체
						var emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
						if (!emailRegExp.test(email.value.trim())) {
							msg.innerHTML = '잘못된 이메일 형식입니다.<br/>';
							flag = true;
						}
					}

					if (userpw.value.trim().length < 1) {
						msg.innerHTML += '비밀번호는 필수 입력입니다.<br/>';
						flag = true;
					} else {
						var pwRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/;
						if (!pwRegExp.test(userpw.value.trim())) {
							msg.innerHTML = '비밀번호는 숫자와 영문 대소문자 그리고 특수문자가 포함되어야 합니다.<br/>';
							flag = true;
						} else {
							if (userpw.value.trim() !== userpw1.value.trim()) {
								msg.innerHTML += '2개의 비밀번호는 같아야 합니다.<br/>';
								flag = true;
							}
						}
					}

					if (nickname.value.trim().length < 1) {
						msg.innerHTML += '별명은 필수 입력입니다.<br/>';
						flag = true;
					} else {
						var nicknameRegExp = /^[a-zA-z가-힣0-9]{2,5}$/;
						if (!nicknameRegExp.test(nickname.value.trim())) {
							msg.innerHTML = '닉네임은 영문 한글 숫자로 2자 이상 5자 이하이어야 합니다.<br/>';
							flag = true;
						}
					}
					if (flag == true) {
						event.preventDefault();
					}
				});

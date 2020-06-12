//문서 구조를 파악하고 나면 - document.ready 
//script를 밑에다 쓸때는 이미 읽은 다음에 실행하는 거기 때문에 상관이 없지만 위에다 작성할 경우 document.ready, window.ready가 있으면 그 다음에 작성해야한다.
$(function(){
	//요청 주소 만들기
	var addr = 'http://api.openweathermap.org/data/2.5/weather?q=gyeongju&APPID=8cb79fa7fc8457f9fc0c7c59625471a1';
	//로딩 이미지 출력
	$('#weather_info .load_img').show();
	
	//ajax 요청
	//url 이 데이터를 가져올 주소 
	//type은 요청방식
	//data는 파라미터	
	//success는 데이터를 가져왔을 떄 호출되는 메소드, 매개변수는 가져온 데이터
	//파라미터는 위에 주소에 이미 적혀있기 때문에 아래 코드에 안적어도 무방하다.
	$.ajax({
		url:addr, type:'get', data:{}, success:function(result){
			//데이터 확인
			//console.log(result);
			
			//국가명과 일출과 일몰 - 객체
			var sys = result.sys;
			//도시이름 정보 - 문자열
			var name = result.name;
			//날씨 - 배열
			var weather = result.weather;
			//온도 - 객체
			var main = result.main;
			
			//국가명
			var country = sys.country;
			
			//현재, 최고 , 최저 기온 가져오기
			var temp = main.temp;
			var temp_min = main.temp_min;
			var temp_max = main.temp_max;
			
			//구름상태, 날씨상태 코드, 날씨 아이콘 정보
			var wmain = weather[0].main;
			var wid = weather[0].id;
			var icon = weather[0].icon;
			
			//아이콘 가져오기
			var icon_url = 
				"http://openweathermap.org/img/w/" + icon;
			
			//데이터 출력
			//도시이름과 국가를 출력
			$(".city").html(name + "/" + country);
			//아이콘 출력
			$(".icon").html("<img src='" + 
					icon_url + ".png'/>");
			//구름 상태 출력
			$(".w_id").html(wmain);
			//온도 출력
			$(".temp").html(
					'현재기온:' + 
					parseInt((temp-273.15)) + '&deg;');
			$(".temp_max").html(
					'최고기온:' + 
					parseInt((temp_max-273.15)) + '&deg;');
			$(".temp_min").html(
					'최고기온:' + 
					parseInt((temp_min-273.15)) + '&deg;');
			//로딩 이미지 숨김
			$('#weather_info .load_img').hide();
		}
	});
});

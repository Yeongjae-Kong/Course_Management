// var div = document.getElementById('container');
// div.innerHTML = "수강관리 App";
// div.appendChild(table);

var crudApp = new function() {
	//JSON형식의 수강데이터 배열
	this.myClass = [
		{ID: '1', Class_Name: '운영체제', Category: '전공필수', credit: 3},
		{ID: '2', Class_Name: '컴퓨터구조', Category: '전공선택', credit: 4},
		{ID: '3', Class_Name: '심리학의 이해', Category: '교양필수', credit: 2},
		{ID: '4', Class_Name: '심리학의 이해', Category: '교양필수', credit: 2, newKey:'newData'},
	]
	
	//선택할 수 있는 항목
	this.Category = ['전공필수', '전공선택', '교양필수', '교양선택'];
	
	//Table Header에 담길 데이터의 확장성을 위해 배열에 담기
	this.col = [];

	//--------------------------------
	
	//실제 테이블을 만들어주는 메서드
	this.createTable = ()=>{
		// 테이블을 만들고 데이터를 채우는 코드
		
		// 1 col에 Table Header에 해당하는 데이터(myclass의 key값들)을 넣어주는 코드
		// 2 비어있는 col 배열에 myClass 배열 속 객체들의 key 값을 넣어야 함
		for (var i = 0; i < this.myClass.length; i++){
			for(var key in this.myClass[i]){
				// key를 col 배열에 담기, indexOF: 문자열 속의 문자열 검색
				if(this.col.indexOf(key) === -1) this.col.push(key);
			}
		}
		
		var table = document.createElement('table');
		table.setAttribute('id', 'classTable');

		//tr: 새로운 행 추가
		var tr = table.insertRow(-1);

		//th 작성
		for(var h = 0; h<this.col.length; h++){
			var th = document.createElement('th');
			th.innerHTML = this.col[h];
			tr.appendChild(th);
		}
		var div = document.getElementById('container');
		div.innerHTML = '수강관리 앱';
		div.appendChild(table);
	}
	
	
}

crudApp.createTable();

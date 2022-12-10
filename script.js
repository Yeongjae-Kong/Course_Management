// var div = document.getElementById('container');
// div.innerHTML = "수강관리 App";
// div.appendChild(table);

var crudApp = new function() {
	//JSON형식의 수강데이터 배열
	this.myClass = [
		{ID: '1', Class_Name: '운영체제', Category: '전공필수', credit: 3},
		{ID: '2', Class_Name: '컴퓨터구조', Category: '전공선택', credit: 4},
		{ID: '3', Class_Name: '심리학의 이해', Category: '교양피수', credit: 2}
	]
	
	//선택할 수 있는 항목
	this.Category = ['전공필수', '전공선택', '교양필수', '교양선택'];
}
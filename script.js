// var div = document.getElementById('container');
// div.innerHTML = "수강관리 App";
// div.appendChild(table);

var crudApp = new function() {
	//JSON형식의 수강데이터 배열
	this.myClass = [
		{ID: '1', Class_Name: '운영체제', Category: '전공필수', credit: 3},
		{ID: '2', Class_Name: '컴퓨터구조', Category: '전공선택', credit: 4},
		{ID: '3', Class_Name: '심리학의 이해', Category: '교양필수', credit: 2},
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
		
		//td 작성
		for(var i = 0; i<this.myClass.length; i++){
			// table에 행 추가
			tr = table.insertRow(-1);
			// table header 길이만큼 순회하며 거기에 매칭되는 데이터 갖고오기
			for(var j=0; j<this.col.length; j++){
				var tabCell = tr.insertCell(-1);
				tabCell.innerHTML = this.myClass[i][this.col[j]];
			}
			
			// update 버튼 만들기
			this.td = document.createElement('td');
			tr.appendChild(this.td);
			var btUpdate = document.createElement('input');
			btUpdate.setAttribute('type', 'button');
			btUpdate.setAttribute('value', 'update');
			btUpdate.setAttribute('id', 'Edit' + i);
			btUpdate.setAttribute('style', 'background-color:#44CCEB');
			btUpdate.setAttribute('onclick', 'crudApp.Update(this)');
			this.td.appendChild(btUpdate);
			
			// save 버튼 만들기
			this.td = document.createElement('td');
			tr.appendChild(this.td);
			var btSave = document.createElement('input');
			btSave.setAttribute('type', 'button');
			btSave.setAttribute('value', 'Save');
			btSave.setAttribute('id', 'Save' + i);
			btSave.setAttribute('style', 'diplay:none;');
			btSave.setAttribute('onclick', 'crudApp.Save(this)');
			this.td.appendChild(btSave);
			
			// delete 버튼 만들기
			this.td = document.createElement('td');
			tr.appendChild(this.td);
			var btDelete = document.createElement('input');
			btDelete.setAttribute('type', 'button');
			btDelete.setAttribute('value', 'Delete');
			btDelete.setAttribute('id', 'Delete' + i);
			btDelete.setAttribute('style', 'background-color:#ED5650;');
			btDelete.setAttribute('onclick', 'crudApp.Delete(this)');
			this.td.appendChild(btDelete);
			
		}
		
		// 입력 행 추가
		tr = table.insertRow(-1);
		for (var j = 0; j < this.col.length; j++){
			var newCell = tr.insertCell(-1);
		}
		
		var div = document.getElementById('container');
		div.innerHTML = '수강관리 앱';
		div.appendChild(table);
	}
	
	
}

crudApp.createTable();

let crudApp = new (function () {
  this.myClass = [
    { ID: 1, className: '운영체제', Category: '전공필수', Credit: 3 },
    { ID: 2, className: '컴퓨터구조론', Category: '전공선택', Credit: 4 },
    { ID: 3, className: '심리학의이해', Category: '교양필수', Credit: 2 },
  ];
  //선택할 수 있는 항목 정의.
  this.Category = ['전공필수', '전공선택', `채플`, '교양필수', '교양선택'];

  //table header에 담길 데이터를 확정성을 위해 배열에 담기
  this.col = [];

  //실제로 테이블을 만들어주는 메서드
  this.createTable = () => {
    //테이블을 채우는 코드

    //col에 새로운 table header에 해당하는 데이터 ( myClass의  key 값) 들을 넣어주는 코드
    //비어있는 col 배열에 myClass 배열 속 객체들의 key값들을 넣어줘야 한다.
    for (let i = 0; i < this.myClass.length; i++) {
      //각 객체들 속의 key값들 순화
      for (let key in this.myClass[i]) {
        //key를 col배열에 담기
        if (this.col.indexOf(key) === -1) this.col.push(key);
      }
    }

    let table = document.createElement('table');
    table.setAttribute('id', 'classTable');
    //tr table row 새로운 행 추가.
    let tr = table.insertRow(-1);

    //th table header
    for (let h = 0; h < this.col.length; h++) {
      let th = document.createElement('th');
      th.innerHTML = this.col[h];
      tr.appendChild(th);
    }

    //td 작성
    for (i = 0; i < this.myClass.length; i++) {
      // table에 한 행 추가.
      tr = table.insertRow(-1);
      //table header를 길이만큼 순회하면서 매칭되는 데이터 갖고오기
      for (let j = 0; j < this.col.length; j++) {
        //한 행에 해당하는 한 칸은 incertcell
        let tabCell = tr.insertCell(-1);
        tabCell.innerHTML = this.myClass[i][this.col[j]];
      }
      //btn 만들기
      //업데이트 버튼x
      this.td = document.createElement('td');
      tr.appendChild(this.td);
      let btnUpdate = document.createElement('input');
      btnUpdate.setAttribute('type', 'button');
      btnUpdate.setAttribute('value', 'Update');
      btnUpdate.setAttribute('id', 'Edit' + i);
      btnUpdate.setAttribute('style', 'background-color:#44CCEB');
      btnUpdate.setAttribute('onclick', 'crudApp.Update(this)'); //버튼이 클릭 될 때 마다 실행할 메소드
      this.td.appendChild(btnUpdate);

      //save btn
      tr.appendChild(this.td);
      let btnSave = document.createElement('input');
      btnSave.setAttribute('type', 'button');
      btnSave.setAttribute('value', 'Save');
      btnSave.setAttribute('id', 'save' + i);
      btnSave.setAttribute('style', 'display:none');
      btnSave.setAttribute('onclick', 'crudApp.Save(this)'); //버튼이 클릭 될 때 마다 실행할 메소드
      this.td.appendChild(btnSave);

      //delete btn
      this.td = document.createElement('td');
      tr.appendChild(this.td);
      let btnDelete = document.createElement('input');
      btnDelete.setAttribute('type', 'button');
      btnDelete.setAttribute('value', 'Delete');
      btnDelete.setAttribute('id', 'Delete' + i);
      btnDelete.setAttribute('style', 'background-color:#ED5650');
      btnDelete.setAttribute('onclick', 'crudApp.Delete(this)'); //버튼이 클릭 될 때 마다 실행할 메소드
      this.td.appendChild(btnDelete);
    }

    //입력 행 추가
    tr = table.insertRow(-1);
    for (let j = 0; j < this.col.length; j++) {
      let newCell = tr.insertCell(-1);
      if (j >= 1) {
        if (j === 2) {
          //셀렉트 칸 만들기
          let select = document.createElement('select');
          select.innerHTML = `<option value=""></option>`;
          for (let k = 0; k < this.Category.length; k++) {
            select.innerHTML =
              select.innerHTML +
              `<option value = '${this.Category[k]}'>${this.Category[k]}</option>`;
          }
          newCell.appendChild(select);
        } else {
          let textBox = document.createElement('input');
          textBox.setAttribute('type', 'text');
          textBox.setAttribute('value', '');
          newCell.appendChild(textBox);
        }
      }
    }

    //create btn
    this.td = document.createElement('td');
    tr.appendChild(this.td);
    let btnCreate = document.createElement('input');
    btnCreate.setAttribute('type', 'button');
    btnCreate.setAttribute('value', 'Create');
    btnCreate.setAttribute('id', 'New' + i);
    btnCreate.setAttribute('style', 'background-color:#207dd1');
    btnCreate.setAttribute('onclick', 'crudApp.New(this)'); //버튼이 클릭 될 때 마다 실행할 메소드
    this.td.appendChild(btnCreate);

    //title
    let div = document.getElementById('container');
    div.innerHTML = '수강관리 앱';
    div.appendChild(table);
  };

  //Delete method
  this.Delete = (obtn) => {
    let targetIdx = obtn.parentNode.parentNode.rowIndex;
    this.myClass.splice(targetIdx - 1, 1);
    this.createTable();
  };
})();

crudApp.createTable();

/*
let div = document.getElementById('container');
div.innerHTML = '<h3>수강관리 App</h3>';
div.appendChild(table); */

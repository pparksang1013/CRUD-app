let crudApp = new function(){
    this.myClass = [
        {ID: 1, className: '운영체제', Category: '전공필수', Credit: 3},
        {ID: 2, className: '컴퓨터구조론', Category: '전공선택', Credit: 4},
        {ID: 3, className: '심리학의이해', Category: '교양필수', Credit: 2}
    ]
    //선택할 수 있는 항목 정의.
    this.Category = ['전공필수','전공선택','교양필수','교양선택'];

    //table header에 담길 데이터를 확정성을 위해 배열에 담기
    this.col = [];

    //실제로 테이블을 만들어주는 메서드
    this.createTable = () => {
        //테이블을 채우는 코드
    
    //col에 새로운 table header에 해당하는 데이터 ( myClass의  key 값) 들을 넣어주는 코드
    //비어있는 col 배열에 myClass 배열 속 객체들의 key값들을 넣어줘야 한다.
    for(let i = 0, i < this.myClass.length; i++){
        //각 객체들 속의 key값들 순화
        for(let key in this.myClass[i]);
            //key를 col배열에 담기
            if(this.col.indexOf(key) === -1) this.col.push)(key)};
        };
    };
};

crudApp.createTable();

/*
let div = document.getElementById('container');
div.innerHTML = '<h3>수강관리 App</h3>';
div.appendChild(table); */


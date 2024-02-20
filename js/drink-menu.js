// btn1
const btn = document.querySelector('.all-menu .btn1');
const nav = document.querySelector('.all-menu .all-wrap');


btn.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('active');
});

// 음료 탭 구현
// 공유자료중 탭구조 js 찾아서 forEach를 사용한다.
// 해당 인덱스번호랑 맞춰서 섹션의 인덱스 맞춰 열기
const secbtns = document.querySelectorAll('.pro-list-tab .btn');
const secs = document.querySelectorAll('.sec-wrap .sec');
secbtns.forEach((secbtn, index) => {
  secbtn.addEventListener('click', function () {
    for (const secbtn of secbtns) secbtn.classList.remove("active");
    for (const sec of secs) sec.classList.remove("active");
    // 모든 버튼과 박스에서 active제거
    secs[index].classList.add("active");
    // 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
    this.classList.add("active");
  });
});
secbtns[0].click(); //첫번째 탭 열어놓기


// .atc-hover 출력이벤트
const atcs = document.querySelectorAll('.atc-wrap .atc');
for (const atc of atcs) {
  // 그 많은 .atc중에 하나를 클릭한다면
  atc.addEventListener('click', function (e) {
    openAtc(atc); // .atc-hover열어라
    if (e.target.classList == 'btn2') {
      // 혹시클릭한 버튼이 x버튼이면
      e.target.parentNode.parentNode.classList.remove('active');
      // x버튼의 부모부모(.atc-hover)를 찾아가 닫아라
    }
  });
}
function openAtc(act) {
  act.querySelector('.atc-hover').classList.add('active');
}



// .table(제품 영양정보) 출력이벤트
const btn2s = document.querySelectorAll('.price .btn3');
const table = document.querySelectorAll('.price .table');
for (const btn2 of btn2s) {
  // 그 많은 .btn3중에 하나를 클릭한다면
  btn2.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active');
  });
}


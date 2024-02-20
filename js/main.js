// btn1
const btn = document.querySelector('.all-menu .btn1');
const nav = document.querySelector('.all-menu .all-wrap');


btn.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('active');
});



// Membership FAQ 아코디언 메뉴
let qTabs = document.querySelectorAll('.faq-wrap article .q ');
console.log(qTabs);
for (const q of qTabs) {
  q.addEventListener('click', function () {
    // console.log(this.parentNode);
    this.parentNode.classList.toggle('on');
  });
}

// Initialize Swiper
var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper4 = new Swiper(".swiper10", {
  slidesPerView: 1.4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper5 = new Swiper(".swiper11", {
  slidesPerView: 1.4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// 초기로딩시 사이즈 파악후 스와이퍼 이미지 변경(학원 수료 15일 정도 남았을 때 배우는 것(배운뒤에 혼자 만들어 보기)))
let swiper1Slides = document.querySelectorAll('.swiper1 .swiper-slide');
if (window.innerWidth < 1200 && window.innerWidth > 640) {
  swiper1Slides.forEach((slide, index) => {
    slide.querySelector('img').setAttribute('src', `/img/main-visual-1200-${index + 1}.jpg`);
  });
} else if (window.innerWidth < 640) {
  swiper1Slides.forEach((slide, index) => {
    slide.querySelector('img').setAttribute('src', `/img/main-visual-640-${index + 1}.jpg`);
  });
} else {
  swiper1Slides.forEach((slide, index) => {
    slide.querySelector('img').setAttribute('src', `/img/main-visual-1920-${index + 1}.jpg`);
  });
}
// 리사이징 시 스와이퍼 이미지 변경
window.addEventListener('resize', function () {
  let swiper1Slides = document.querySelectorAll('.swiper1 .swiper-slide');
  if (this.innerWidth < 1200 && this.innerWidth > 640) {
    swiper1Slides.forEach((slide, index) => {
      slide.querySelector('img').setAttribute('src', `/img/main-visual-1200-${index + 1}.jpg`);
    });
  } else if (this.innerWidth < 640) {
    swiper1Slides.forEach((slide, index) => {
      slide.querySelector('img').setAttribute('src', `/img/main-visual-640-${index + 1}.jpg`);
    });
  } else {
    swiper1Slides.forEach((slide, index) => {
      slide.querySelector('img').setAttribute('src', `/img/main-visual-1920-${index + 1}.jpg`);
    });
  }
});

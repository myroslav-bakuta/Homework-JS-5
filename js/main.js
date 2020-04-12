// https://developer.mozilla.org/uk/docs/Web/Guide/HTML/Використання_HTML-секцій_та_структура_документу
// https://learn.javascript.ru/dom-nodes

function Container() {
  mainTag = document.createElement('div');
  mainTag.setAttribute('class', 'carousel');
  mainTag.setAttribute('id', 'carousel');
  // document.querySelector('body').appendChild(mainTag);
  // container = document.querySelector('#carousel');
};

function Slides(numberOfSlides) {
  slides = document.createElement('ul');
  slides.setAttribute('class', 'slides');

  for (i = 0; i < numberOfSlides; i++) {
    let slide = document.createElement('li');
    let slideLink = document.createElement('a');
    slide.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');
    slideLink.setAttribute('href', '#');
    slide.appendChild(slideLink);
    slides.appendChild(slide);
  };
  container.appendChild(slides);
}

function Indicators(numberOfIndicators) {
  indicators = document.createElement('div');
  indicators.setAttribute('class', 'indicators');

  for (i = 0; i < numberOfIndicators; i++) {
    // https://getbootstrap.com/docs/4.0/components/carousel/

    let indicator = document.createElement('span');
    indicator.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
    indicator.setAttribute('data-slide-to', i);
    indicators.appendChild(indicator);
  };
  container.appendChild(indicators);
};

function Control() {
  controls = document.createElement('div');
  controls.setAttribute('class', 'controls');

  for (i = 0; i < 3; i++) {
    let controlElement = document.createElement('div');
    let controlIcon = document.createElement('i');
    let controlStaticClass = 'controls__item';
    let iconStaticClass = 'fas';
    // controlElement[0].setAttribute('class', controlStaticClass + ' controls__prev');
    // controlElement[1].setAttribute('class', controlStaticClass + ' controls__next');
    // controlElement[2].setAttribute('class', controlStaticClass + ' controls__pause');
    // controlIcon[0].setAttribute('class', iconStaticClass + ' fa-chevron-left');
    // controlIcon[1].setAttribute('class', iconStaticClass + ' fa-chevron-right');
    // controlIcon[2].setAttribute('class', iconStaticClass + ' fa-play');

    // https://learn.javascript.ru/switch
    // https://plnkr.co/edit/?p=preview&preview

    switch (i) {
      case 0:
        controlElement.setAttribute('class', controlStaticClass + ' controls__prev');
        controlIcon.setAttribute('class', iconStaticClass + ' fa-chevron-left');
        break;
      case 1:
        controlElement.setAttribute('class', controlStaticClass + ' controls__next');
        controlIcon.setAttribute('class', iconStaticClass + ' fa-chevron-right');
        break;
      case 2:
        controlElement.setAttribute('class', controlStaticClass + ' controls__pause');
        controlIcon.setAttribute('class', iconStaticClass + ' fa-play');
        break;
    };
    controlElement.appendChild(controlIcon);
    controls.appendChild(controlElement);
  };
  container.appendChild(controls);
};


// https://overcoder.net/q/29640/как-динамически-создать-css-класс-в-javascript-и-применить
// https://css-live.ru/articles/vsyo-chto-vam-nuzhno-znat-o-css-in-js.html

function Style() {
  styleTag = document.createElement('style');
  let style = `
    .controls,
    .slides {
      position: relative;
    }
    .indicators {
      display: flex;
    }
    .indicators__item {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 1px;
      cursor: pointer;
      background-color: white;
      border: 1px solid #fff;
      border-radius: 10px;
    }`;

  /*-------Bootstrap----------
    https://stackoverflow.com/questions/39937072/styling-bootstrap-carousel-indicators
    https://bootstrapshuffle.com/classes/carousel/carousel-indicators
    https://www.w3schools.com/bootstrap4/bootstrap_ref_js_carousel.asp

    .carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    z-index: 15;
    width: 60%;
    padding-left: 0;
    margin-left: -30%;
    text-align: center;
    list-style: none
}

.carousel-indicators li {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 1px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #000\9;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #fff;
    border-radius: 10px
}

.carousel-indicators .active {
    width: 12px;
    height: 12px;
    margin: 0;
    background-color: #fff
}*/

  // div.slides.position = 'relative';
  // div.controls.position = 'relative';
  // div.indicators.display = 'flex';

  // https://developer.mozilla.org/ru/docs/Web/API/Element/innerHTML

  styleTag.innerHTML = style;
  container.appendChild(styleTag);
};

var pointer = null;

function clickHandler(e) {
  let target = e.target;

  // https://jsfiddle.net/fomenkoandrey/3kb4ofyg/

  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red'; /* ЧОГО ТІЛЬКИ 'red' ПРОХОДИТЬ ВАЛІДАЦІЮ??? */
    if (pointer !== null) pointer.removeAttribute('style');
    pointer = target;
  };
};

function eventListener() {
  let indicators = document.querySelector('div.indicators');
  indicators.addEventListener('click', clickHandler);
};

// let indicators = document.querySelector('div.indicators');
// indicators.addEventListener('click', function(e) {
//   var target = e.target;
//   if (target.classList.contains('indicators__item')) {
//     target.style.backgroundColor = 'black';
//     if (pointer !== null) pointer.removeAttribute('style');
//     pointer = target;
//   };
// });

function createCarousel(slidesCount = 5) {
  Container();
  container = document.querySelector('#carousel');
  Slides(slidesCount);
  Indicators(slidesCount);
  Control();
  Style();
  eventListener();
};

createCarousel(4);
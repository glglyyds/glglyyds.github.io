// rem兼容
function setRem() {
    baseSize = 100;
    let basePC = baseSize / 1920;
    let vW = window.innerWidth;
    let vH = window.innerHeight;
    let dueH = vW * 1280 / 1920;
    if (vH < dueH) {
      vW = vH * 1920 / 1280;
    }
    let rem = vW * basePC;
    document.documentElement.style.fontSize = rem + 'px';
  }
  setRem();
  window.onresize = function () {
    setRem();
  }

  // 3d板娘
  L2Dwidget.init({
    "model": {
      jsonPath: "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",
      "scale": 1
    },
    "display": {
      "position": "right", //看板娘的表现位置
      "width": 100,  //小萝莉的宽度
      "height": 200, //小萝莉的高度
      "hOffset": 0, // 小萝莉的X偏移量
      "vOffset": -50//小萝莉的Y偏移量
    },
    "mobile": {
      "show": true,//是否在移动端展示
      "scale": 0.5 //范围
    },
    "react": {
      "opacityDefault": 0.7,//小萝莉的透明度
      "opacityOnHover": 0.2 //鼠标跟随透明度
    }
  });

  // 轮播图
  var swiper = new Swiper('.banner-swiper1', {
    effect : 'slide',
    loop : true,
    speed:500,//切换速度
    centeredSlides : true,
    slidesPerView: 1.5,
    loopAdditionalSlides : 1,
    autoplay : {
    delay:4000,//展示时间
    disableOnInteraction: false
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
  });

  // 天气
  WIDGET = {
    "CONFIG": {
        "modules": "01234",
        "background": "1",
        "tmpColor": "F1F1F1",
        "tmpSize": "16",
        "cityColor": "F1F1F1",
        "citySize": "16",
        "aqiColor": "F1F1F1",
        "aqiSize": "16",
        "weatherIconSize": "24",
        "alertIconSize": "18",
        "padding": "10px 10px 10px 10px",
        "shadow": "0",
        "language": "auto",
        "fixed": "false",
        "vertical": "top",
        "horizontal": "left",
        "key": "05297ab38f104c7ab23efab566b969e5"
    }
}
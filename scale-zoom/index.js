let komaInfoList = [
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_00.000.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_00.2.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_00.4.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_00.600.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_00.8.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_01.000.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_01.2.webp', transform: `matrix3d(1.5, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_01.4.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_01.599.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_01.799.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_01.999.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_02.199.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_02.4.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_02.6.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_02.800.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_03.000.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_03.200.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_03.400.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_03.600.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_03.800.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_04.000.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_04.200.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_04.400.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_04.600.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_04.800.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_05.000.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_05.200.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_05.400.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_05.600.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_05.800.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_06.000.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_06.200.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_06.400.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_06.600.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_06.800.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_07.000.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_07.200.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_07.400.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_07.600.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
  {webURL: './images/5fps/7.978333-cat-landscape-00_00_07.800.webp', transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`},
];

function loadImageDom(publicURL) {
  return new Promise((resolve, reject) => {
    const imageDom = new Image();
    imageDom.crossOrigin = 'anonymous';
    imageDom.onload = (event) => {
      resolve({
        imageDom: imageDom,
        imageDomWidth: imageDom.width,
        imageDomHeight: imageDom.height,
      });
    };
    imageDom.onerror = (event) => {
      reject(event);
    };
    imageDom.src = publicURL;
  });
}

function getMaterialInfo(komaInfoList) {
  const y = window.pageYOffset;
  return komaInfoList.filter((komaInfo) => {
    return komaInfo.top <= y && y <= komaInfo.bottom;
  })[0];
}

function setUpCurrentSection(komaInfoList) {
  const materialInfo = getMaterialInfo(komaInfoList);
  if (materialInfo) {
    if (materialInfo.komaDom) {
      reflectImage2Canvas(materialInfo.komaDom, materialInfo.imageDomWidth, materialInfo.imageDomHeight, materialInfo.komaTransform);
    }
  }
}

function getOrientation(imageDomWidth, imageDomHeight) {
  if (imageDomWidth > imageDomHeight) {
    return `landscape`;
  }
  return `portrait`;
}

function reflectImage2Canvas(imageDom, imageDomWidth, imageDomHeight, komaTransform) {
  const canvasDom = document.querySelector(`.reflector`);
  canvasDom.style.transform = `${komaTransform}`;
  canvasDom.width = imageDomWidth;
  canvasDom.height = imageDomHeight;
  const canvasDomContext = canvasDom.getContext('2d');
  canvasDomContext.drawImage(imageDom, 0, 0, imageDomWidth, imageDomHeight);
}

(async () => {
  const playSpeed = 1000; // 8 >>> 100 >> 200 >>> 300 >>> 400 >> 500 >>> 600 >>> 700 >>> 800 >>> 900 >>> 1000
  const contentBaseHeight = 1000;
  const komaBaseHeight = window.innerHeight / playSpeed;
  const duration = 7.978333;
  let pageDomHeight = contentBaseHeight * 7.978333;
  const komaDomHeight = (pageDomHeight / komaInfoList.length) * komaBaseHeight;
  pageDomHeight = komaDomHeight * komaInfoList.length;

  const pageDom = document.querySelector(`.page`);
  pageDom.style.height = `${pageDomHeight}px`;

  komaInfoList = await Promise.all(
    komaInfoList.map(async (item, index) => {
      const {imageDom, imageDomWidth, imageDomHeight} = await loadImageDom(item.webURL);
      return {
        komaNumber: index + 1,
        top: index * komaDomHeight,
        bottom: index * komaDomHeight + komaDomHeight,
        domHeight: komaDomHeight,
        komaURL: item.webURL,
        komaDom: imageDom,
        imageDomWidth: imageDomWidth,
        imageDomHeight: imageDomHeight,
        komaTransform: item.transform,
      };
    })
  );
  window.addEventListener(
    'scroll',
    (e) => {
      setUpCurrentSection(komaInfoList);
    },
    false
  );
  window.scrollTo(0, 1);
})();

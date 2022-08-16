// 上限絶対値：(Viewportの横幅 / 2) * 0.5 * 0.3 >>> 320 160 80 12
// 上限絶対値：(Viewportの縦幅 / 2 ) * 0.5 * 0.3 >>> 568 234 117 35.1
// http://ds-overdesign.com/transform/matrix3d.html
// 次のフォーカスまでの遊びイメージを追加 各ステージで60枚ぐらい
let komaInfoList = [
  {frameId: 1, komaId: 1, webURL: './images/1-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 1, webURL: './images/1-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 1, webURL: './images/1-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 1, webURL: './images/1-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 1, webURL: './images/1-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 1, webURL: './images/1-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 1, webURL: './images/1-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 1, webURL: './images/1-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 1, webURL: './images/1-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 1, webURL: './images/1-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},

  {frameId: 1, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},

  {frameId: 2, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 2, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 2, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 2, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 2, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 2, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 2, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 2, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 2, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 2, komaId: 2, webURL: './images/2-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},

  {frameId: 1, komaId: 3, webURL: './images/3-resize-300w-140h.webp', transform: 'translate(-50px, 40px) scale(2)'},
  {frameId: 1, komaId: 3, webURL: './images/3-resize-300w-140h.webp', transform: 'translate(-50px, 40px) scale(2)'},
  {frameId: 1, komaId: 3, webURL: './images/3-resize-300w-140h.webp', transform: 'translate(-50px, 40px) scale(2)'},
  {frameId: 1, komaId: 3, webURL: './images/3-resize-300w-140h.webp', transform: 'translate(-50px, 40px) scale(2)'},
  {frameId: 1, komaId: 3, webURL: './images/3-resize-300w-140h.webp', transform: 'translate(-50px, 40px) scale(2)'},
  {frameId: 1, komaId: 3, webURL: './images/3-resize-300w-140h.webp', transform: 'translate(-50px, 40px) scale(2)'},
  {frameId: 1, komaId: 3, webURL: './images/3-resize-300w-140h.webp', transform: 'translate(-50px, 40px) scale(2)'},
  {frameId: 1, komaId: 3, webURL: './images/3-resize-300w-140h.webp', transform: 'translate(-50px, 40px) scale(2)'},
  {frameId: 1, komaId: 3, webURL: './images/3-resize-300w-140h.webp', transform: 'translate(-50px, 40px) scale(2)'},
  {frameId: 1, komaId: 3, webURL: './images/3-resize-300w-140h.webp', transform: 'translate(-50px, 40px) scale(2)'},

  {frameId: 1, komaId: 4, webURL: './images/4-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2.5)'},
  {frameId: 1, komaId: 4, webURL: './images/4-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2.5)'},
  {frameId: 1, komaId: 4, webURL: './images/4-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2.5)'},
  {frameId: 1, komaId: 4, webURL: './images/4-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2.5)'},
  {frameId: 1, komaId: 4, webURL: './images/4-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2.5)'},
  {frameId: 1, komaId: 4, webURL: './images/4-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2.5)'},
  {frameId: 1, komaId: 4, webURL: './images/4-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2.5)'},
  {frameId: 1, komaId: 4, webURL: './images/4-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2.5)'},
  {frameId: 1, komaId: 4, webURL: './images/4-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2.5)'},
  {frameId: 1, komaId: 4, webURL: './images/4-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2.5)'},

  {frameId: 1, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 1, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 1, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 1, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 1, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 1, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 1, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 1, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 1, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 1, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},

  {frameId: 2, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 2, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 2, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 2, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 2, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 2, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 2, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 2, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 2, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},
  {frameId: 2, komaId: 5, webURL: './images/5-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3.5)'},

  {frameId: 1, komaId: 6, webURL: './images/6-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2)'},
  {frameId: 1, komaId: 6, webURL: './images/6-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2)'},
  {frameId: 1, komaId: 6, webURL: './images/6-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2)'},
  {frameId: 1, komaId: 6, webURL: './images/6-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2)'},
  {frameId: 1, komaId: 6, webURL: './images/6-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2)'},
  {frameId: 1, komaId: 6, webURL: './images/6-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2)'},
  {frameId: 1, komaId: 6, webURL: './images/6-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2)'},
  {frameId: 1, komaId: 6, webURL: './images/6-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2)'},
  {frameId: 1, komaId: 6, webURL: './images/6-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2)'},
  {frameId: 1, komaId: 6, webURL: './images/6-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(2)'},

  {frameId: 1, komaId: 7, webURL: './images/7-resize-300w-140h.webp', transform: 'translate(-30px, -10px) scale(2)'},
  {frameId: 1, komaId: 7, webURL: './images/7-resize-300w-140h.webp', transform: 'translate(-30px, -10px) scale(2)'},
  {frameId: 1, komaId: 7, webURL: './images/7-resize-300w-140h.webp', transform: 'translate(-30px, -10px) scale(2)'},
  {frameId: 1, komaId: 7, webURL: './images/7-resize-300w-140h.webp', transform: 'translate(-30px, -10px) scale(2)'},
  {frameId: 1, komaId: 7, webURL: './images/7-resize-300w-140h.webp', transform: 'translate(-30px, -10px) scale(2)'},
  {frameId: 1, komaId: 7, webURL: './images/7-resize-300w-140h.webp', transform: 'translate(-30px, -10px) scale(2)'},
  {frameId: 1, komaId: 7, webURL: './images/7-resize-300w-140h.webp', transform: 'translate(-30px, -10px) scale(2)'},
  {frameId: 1, komaId: 7, webURL: './images/7-resize-300w-140h.webp', transform: 'translate(-30px, -10px) scale(2)'},
  {frameId: 1, komaId: 7, webURL: './images/7-resize-300w-140h.webp', transform: 'translate(-30px, -10px) scale(2)'},
  {frameId: 1, komaId: 7, webURL: './images/7-resize-300w-140h.webp', transform: 'translate(-30px, -10px) scale(2)'},

  {frameId: 1, komaId: 8, webURL: './images/8-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 8, webURL: './images/8-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 8, webURL: './images/8-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 8, webURL: './images/8-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 8, webURL: './images/8-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 8, webURL: './images/8-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 8, webURL: './images/8-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 8, webURL: './images/8-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 8, webURL: './images/8-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},
  {frameId: 1, komaId: 8, webURL: './images/8-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(3)'},

  {frameId: 1, komaId: 9, webURL: './images/9-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},

  {frameId: 1, komaId: 10, webURL: './images/10-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 11, webURL: './images/11-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 12, webURL: './images/12-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 13, webURL: './images/13-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 14, webURL: './images/14-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 15, webURL: './images/15-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
  {frameId: 1, komaId: 16, webURL: './images/16-resize-300w-140h.webp', transform: 'translate(0px, 0px) scale(1)'},
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

function getMaterialInfo(komaInfoList, frameIndex) {
  return komaInfoList[frameIndex];
}

function hiddenKomaText() {
  const komaTextDomList = [...document.querySelectorAll(`.koma-text`)];
  for (let index = 0; index < komaTextDomList.length; index++) {
    const komaTextDom = komaTextDomList[index];
    komaTextDom.style.opacity = 0;
  }
}

function removeKomaText() {
  const komaTextDomList = [...document.querySelectorAll(`.koma-text`)];
  for (let index = 0; index < komaTextDomList.length; index++) {
    const komaTextDom = komaTextDomList[index];
    komaTextDom.parentElement.removeChild(komaTextDom);
  }
}

function setUpCurrentSection(komaInfoList, frameIndex) {
  const materialInfo = getMaterialInfo(komaInfoList, frameIndex);
  if (materialInfo) {
    if (materialInfo.komaDom) {
      reflectImage2Canvas(materialInfo.komaDom, materialInfo.imageDomWidth, materialInfo.imageDomHeight, materialInfo.komaTransform);

      if (materialInfo.komaId && materialInfo.frameId) {
        document.body.setAttribute('data-current-koma-id', materialInfo.komaId);
        document.body.setAttribute('data-current-frame-id', materialInfo.frameId);
      }
    }
  }
}

function showKomaText() {
  const komaTextDomList = [...document.querySelectorAll(`.koma-text`)];
  for (let index = 0; index < komaTextDomList.length; index++) {
    const komaTextDom = komaTextDomList[index];
    const currentKomaId = document.body.getAttribute('data-current-koma-id');
    const currentFrameId = document.body.getAttribute('data-current-frame-id');
    const komaTextKomaId = komaTextDom.getAttribute('data-koma-id');
    const komaTextFrameId = komaTextDom.getAttribute('data-frame-id');
    if (currentKomaId === komaTextKomaId && currentFrameId === komaTextFrameId) {
      komaTextDom.style.opacity = 1;
    } else {
      komaTextDom.style.opacity = 0;
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
  const frameCount = komaInfoList.length;

  komaInfoList = await Promise.all(
    komaInfoList.map(async (item, index) => {
      const {imageDom, imageDomWidth, imageDomHeight} = await loadImageDom(item.webURL);
      return {
        komaNumber: index + 1,
        komaURL: item.webURL,
        komaDom: imageDom,
        imageDomWidth: imageDomWidth,
        imageDomHeight: imageDomHeight,
        komaTransform: item.transform,
        komaId: item.komaId,
        frameId: item.frameId,
      };
    })
  );

  window.addEventListener(
    'scroll',
    (e) => {
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));
      requestAnimationFrame(() => setUpCurrentSection(komaInfoList, frameIndex));
      requestAnimationFrame(() => showKomaText());
    },
    false
  );
  window.scrollTo(0, 1);
})();

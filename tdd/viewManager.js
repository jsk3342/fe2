class ViewManager {
  constructor(textManager, options) {
    if(textManager.constructor !== TextManager) {
      throw Error('textManger 객체가 전달 x')
    }
    if (!options.btnEl || !options.viewerEl || !options.inpTxt) {
      throw Error('전달받는 요소 중 빈값이 존재함')
    }
  }
}
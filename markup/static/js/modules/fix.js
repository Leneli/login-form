import isIe from "./isIe";

export function fixIE () {
  var pageWrapper = document.querySelector('.page__wrapper');

  if (pageWrapper && isIe()) {
    pageWrapper.style.height = '100vh';
  }
}
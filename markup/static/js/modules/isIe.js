export default function () {
  var ua = window.navigator.userAgent.toLowerCase();

  return (/trident/gi).test(ua) || (/msie/gi).test(ua);
}
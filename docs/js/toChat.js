const toChatBtn = document.querySelector(".toChat__btn");
const chat = document.querySelector("#disqus_thread");

const toChatHandler = () => {
  SmoothVerticalScrolling(toChatBtn, 275, chat);
};

function SmoothVerticalScrolling(e, time, where) {
  var eTop = e.getBoundingClientRect().top;
  var eAmt = eTop / 100;
  var curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, where);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, where) {
  if (where == "center" || where == "") window.scrollBy(0, eAmt / 2);
  if (where == "top") window.scrollBy(0, eAmt);
}

toChatBtn.addEventListener("click", toChatHandler);
document.addEventListener("scroll", scrollHandler);

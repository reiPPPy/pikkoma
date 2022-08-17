//SVGアニメーションの描画
var stroke;
stroke = new Vivus(
  "mask",
  {
    //アニメーションをするIDの指定
    start: "manual", //自動再生をせずスタートをマニュアルに
    type: "scenario-sync", // アニメーションのタイプを設定
    duration: 10, //アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false, //パスが更新された場合に再レンダリングさせない
    animTimingFunction: Vivus.EASE, //動きの加速減速設定
  },
  function () {
    $("#mask").attr("class", "done"); //描画が終わったらdoneというクラスを追加
  }
);

$(window).on("load", function () {
  $("#splash").delay(3000).fadeOut("slow"); //ローディング画面を3秒（3000ms）待機してからフェイドアウト
  $("#splash_logo").delay(3000).fadeOut("slow"); //ロゴを3秒（3000ms）待機してからフェイドアウト
  stroke.play(); //SVGアニメーションの実行
});

// ------------------------------------------------------------------------------------
// ハンバーガーボタンがクリックされた時
const menu = document.querySelector(".menu");
const nav = document.querySelector("#nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("menu-active");
});

//ナビゲーションのリンクがクリックされたら
const links = document.querySelectorAll("#nav a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("menu-active");
  });
});
// ------------------------------------------------------------------------------------

const iframeElm = document.querySelector("#iframe"); // iframe要素
const navElm = document.querySelector("#nav");
const anchorLinkElms = navElm.querySelectorAll("a[href^='#']"); // .nav 内にあるページ内リンクの a要素

anchorLinkElms.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // aタグ のデフォルトの挙動をキャンセル
    const href = link.getAttribute("href");

    const target = iframeElm.contentWindow.document.querySelector(href); // iframeの中の対象を取得
    iframeElm.contentWindow.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});


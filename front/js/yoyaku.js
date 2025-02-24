document.addEventListener("DOMContentLoaded", () => {
  init();
});

//画面起動時点のメソッド
function init() {
  //sessionStorageから値を取得する
  let yoyakuDatetime = sessionStorage.getItem("yoyakuDatetime");
  let yoyakuNinzu = sessionStorage.getItem("yoyakuNinzu");
  let yoyakuTenMei = sessionStorage.getItem("yoyakuTenMei");
  let date = document.getElementById("date");
  let people = document.getElementById("people");
  let tenMei = document.getElementById("tenMei");
  date.value = yoyakuDatetime;
  people.value = yoyakuNinzu.replace(/[^0-9]/g, "");
  tenMei.value = yoyakuTenMei;
}

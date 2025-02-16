flatpickr("#datepicker", {
  dateFormat: "Y-m-d", // 日付フォーマット
  allowInput: true, // テキスト入力も許可
  position: "auto", // カレンダーが自動で表示される位置
});

let calenderIcon = document.getElementById("calendarIcon");
calenderIcon.addEventListener("click", function () {
  document.getElementById("datepicker").focus();
});

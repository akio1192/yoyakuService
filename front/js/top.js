flatpickr("#datepicker", {
  dateFormat: "Y-m-d", // 日付フォーマット
  allowInput: true, // テキスト入力も許可
  position: "auto", // カレンダーが自動で表示される位置
});

let calenderIcon = document.getElementById("calendarIcon");
calenderIcon.addEventListener("click", function () {
  document.getElementById("datepicker").focus();
});

let fixedYoyakuButton = document.getElementById("fixed-button");
fixedYoyakuButton.addEventListener("click", () => {
  location.href = "yoyaku.html";
});

let yoyakuButton = document.getElementById("inputSubmit");
yoyakuButton.addEventListener("click", (event) => {
  event.preventDefault();
  //予約日時
  let yoyakuDatetime = document.getElementById("datepicker").value;

  //人数
  let yoyakuNinzu = document.getElementById("yoyakuNinzu").value;

  //店名
  let yoyakuTenMei = document.getElementById("tenMei").value;

  console.log(yoyakuDatetime);
  console.log(yoyakuNinzu);
  console.log(yoyakuTenMei);

  sessionStorage.setItem("yoyakuDatetime", yoyakuDatetime);
  sessionStorage.setItem("yoyakuNinzu", yoyakuNinzu);
  sessionStorage.setItem("yoyakuTenMei", yoyakuTenMei);

  window.location.href = "yoyaku.html";
});

let launguagebutton = document.getElementById("language");
launguagebutton.addEventListener("click", (event) => {
  let languageChange = document.getElementById("languageChange");
  languageChange.style.display = "inline";
});

document.addEventListener("click", (event) => {
  if (
    !launguagebutton.contains(event.target) &&
    !languageChange.contains(event.target)
  ) {
    languageChange.style.display = "none";
  }
});

languageChange.addEventListener("click", (event) => {
  if (event.target.classList.contains("languageSelect")) {
    let languageSelection = document.getElementById("japanese");
    languageSelection.textContent = event.target.textContent;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const langOptions = document.querySelectorAll(".languageSelect");
  const textElements = {
    title: document.getElementById("title"),
    h1: document.querySelector("h1"),
    service: document.getElementById("service"),
    benefit1: document.querySelector(".benefits .benefit-card:nth-child(1) h3"),
    benefit2: document.querySelector(".benefits .benefit-card:nth-child(2) h3"),
    benefit3: document.querySelector(".benefits .benefit-card:nth-child(3) h3"),
    benefit4: document.querySelector(".benefits .benefit-card.price h3"),
    step1: document.querySelector(".steps-container .step:nth-child(1) p"),
    step2: document.querySelector(".steps-container .step:nth-child(2) p"),
    step3: document.querySelector(".steps-container .step:nth-child(3) p"),
    fixedButton: document.getElementById("fixed-button"),
    inputSubmit: document.getElementById("inputSubmit"),
    placeholders: {
      yoyakuNinzu: document.getElementById("yoyakuNinzu"),
      tenMei: document.getElementById("tenMei"),
      datepicker: document.getElementById("datepicker"),
    },
  };

  // 言語ごとのテキストデータ
  const translations = {
    ja: {
      title: "日本の飲食店予約代行サービス",
      h1: "飛行機に乗る前に、日本の <span>食体験を <span id='spanBold'>予約</span></span>",
      service: "便利で効率的な予約代行サービス",
      benefit1:
        "電話予約のみ対応の日本の飲食店でも、オンラインで事前に予約可能！",
      benefit2: "日本到着後、ホテルのスタッフに頼む手間なし！",
      benefit3: "事前に予約確定で、旅行スケジュールがスムーズに！",
      benefit4: "1回の予約が <span class='highlight'>200円</span>",
      step1: "予約情報を入力",
      step2: "担当者が飲食店に電話予約",
      step3: "予約完了後、メールで連絡",
      fixedButton: "予約",
      inputSubmit: "予約",
      placeholders: {
        yoyakuNinzu: "人数",
        tenMei: "店名",
        datepicker: "予約日時",
      },
    },
    en: {
      title: "Japanese Restaurant Reservation Service",
      h1: "Before boarding your flight, <span>book your <span id='spanBold'>food experience</span></span> in Japan",
      service: "Convenient and efficient reservation service",
      benefit1:
        "Even restaurants that only accept phone reservations can be booked online in advance!",
      benefit2: "No need to ask hotel staff for help after arriving in Japan!",
      benefit3:
        "Reservations confirmed in advance for a smooth travel schedule!",
      benefit4: "One reservation costs <span class='highlight'>200 yen</span>",
      step1: "Enter reservation details",
      step2: "Our staff will call the restaurant",
      step3: "Receive confirmation via email",
      fixedButton: "Reserve",
      inputSubmit: "Reserve",
      placeholders: {
        yoyakuNinzu: "Number of people",
        tenMei: "Restaurant name",
        datepicker: "Reservation Date and Time",
      },
    },
    fr: {
      title: "Service de réservation de restaurants japonais",
      h1: "Avant de prendre l'avion, <span>réservez votre <span id='spanBold'>expérience culinaire</span></span> au Japon",
      service: "Service de réservation pratique et efficace",
      benefit1:
        "Même les restaurants qui acceptent uniquement les réservations par téléphone peuvent être réservés en ligne à l'avance!",
      benefit2:
        "Plus besoin de demander de l'aide au personnel de l'hôtel après votre arrivée au Japon!",
      benefit3:
        "Réservations confirmées à l'avance pour un emploi du temps de voyage fluide!",
      benefit4: "Une réservation coûte <span class='highlight'>200 yen</span>",
      step1: "Saisissez les détails de la réservation",
      step2: "Notre équipe appellera le restaurant",
      step3: "Recevez la confirmation par e-mail",
      fixedButton: "Réserver",
      inputSubmit: "Réserver",
      placeholders: {
        yoyakuNinzu: "Nombre de personnes",
        tenMei: "Nom du restaurant",
        datepicker: "Date et Heure de Réservation",
      },
    },
  };

  // 言語選択時のイベント
  langOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const selectedLang = this.textContent.trim(); // 選択された言語
      let langCode = "ja"; // デフォルトは日本語
      if (selectedLang === "英語") langCode = "en";
      if (selectedLang === "フランス語") langCode = "fr";

      // テキストを変更
      textElements.title.textContent = translations[langCode].title;
      textElements.h1.innerHTML = translations[langCode].h1;
      textElements.service.textContent = translations[langCode].service;
      textElements.benefit1.textContent = translations[langCode].benefit1;
      textElements.benefit2.textContent = translations[langCode].benefit2;
      textElements.benefit3.textContent = translations[langCode].benefit3;
      textElements.benefit4.innerHTML = translations[langCode].benefit4;
      textElements.step1.textContent = translations[langCode].step1;
      textElements.step2.textContent = translations[langCode].step2;
      textElements.step3.textContent = translations[langCode].step3;
      textElements.fixedButton.textContent = translations[langCode].fixedButton;
      textElements.inputSubmit.value = translations[langCode].inputSubmit;
      // placeholderを変更
      textElements.placeholders.yoyakuNinzu.setAttribute(
        "placeholder",
        translations[langCode].placeholders.yoyakuNinzu
      );
      textElements.placeholders.tenMei.setAttribute(
        "placeholder",
        translations[langCode].placeholders.tenMei
      );
      textElements.placeholders.datepicker.setAttribute(
        "placeholder",
        translations[langCode].placeholders.datepicker
      );
    });
  });
});

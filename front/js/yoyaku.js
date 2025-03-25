document.addEventListener("DOMContentLoaded", () => {
  init();
});

//画面起動時点のメソッド
function init() {
  //sessionStorageから値を取得する
  let yoyakuDatetime = sessionStorage.getItem("yoyakuDatetime");
  let yoyakuNinzu = sessionStorage.getItem("yoyakuNinzu");
  let yoyakuTenMei = sessionStorage.getItem("yoyakuTenMei");
  let date1 = document.getElementById("date1");
  let people = document.getElementById("people");
  let tenMei = document.getElementById("tenMei");
  date1.value = yoyakuDatetime;
  people.value =
    yoyakuNinzu != null ? yoyakuNinzu.replace(/[^0-9]/g, "") : yoyakuNinzu;
  tenMei.value = yoyakuTenMei;
}

//言語ボタンを押下すると発火するメソッド
let launguagebutton = document.getElementById("language");
launguagebutton.addEventListener("click", (event) => {
  let languageChange = document.getElementById("languageChange");
  languageChange.style.display = "inline";
});

//言語ボタン以外をクリックすると、非表示にする
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
  const langOptions = document.querySelectorAll(".languageSelect"); // 言語選択のセレクトボックス
  const textElements = {
    title: document.querySelector("h1"),
    subtitle: document.querySelector("h3"),
    name: document.querySelector("label[for='name']"),
    namePlaceholder: document.getElementById("name"),
    people: document.querySelector("label[for='people']"),
    peoplePlaceholder: document.getElementById("people"),
    store: document.querySelector("label[for='tenMei']"),
    storePlaceholder: document.getElementById("tenMei"),
    contact: document.querySelector("label[for='contact']"),
    contactPlaceholder: document.getElementById("contact"),
    date1: document.querySelector("label[for='date1']"),
    date2: document.querySelector("label[for='date2']"),
    date3: document.querySelector("label[for='date3']"),
    date1Placeholder: document.getElementById("date1"),
    date2Placeholder: document.getElementById("date2"),
    date3Placeholder: document.getElementById("date3"),
    address: document.querySelector("label[for='address']"),
    addressPlaceholder: document.getElementById("address"),
    notes: document.querySelector("label[for='notes']"),
    notesPlaceholder: document.getElementById("notes"),
    payment: document.querySelector("label[for='payment']"),
    paymentOptions: document.querySelectorAll("#payment option"),
    submit: document.querySelector("input[type='submit']"),
  };

  // 言語ごとの翻訳データ
  const translations = {
    ja: {
      title: "レストラン予約フォーム",
      subtitle: "予約情報を入力してください",
      name: "名前",
      namePlaceholder: "名前",
      people: "人数",
      peoplePlaceholder: "人数",
      store: "予約店舗名",
      storePlaceholder: "予約店舗名",
      contact: "連絡先",
      contactPlaceholder: "自身の電話番号",
      date1: "予約希望日①",
      date2: "予約希望日②",
      date3: "予約希望日③",
      date1Placeholder: "予約希望日①",
      date2Placeholder: "予約希望日②",
      date3Placeholder: "予約希望日③",
      address: "住所（任意）",
      addressPlaceholder: "住所",
      notes: "特記事項（任意）",
      notesPlaceholder: "アレルギーなど",
      payment: "決済方法",
      paymentOptions: ["クレジットカード", "PayPay", "auPay", "現地決済"],
      submit: "予約",
    },
    en: {
      title: "Restaurant Reservation Form",
      subtitle: "Please enter your reservation details",
      name: "Name",
      namePlaceholder: "Name",
      people: "Number of People",
      peoplePlaceholder: "Number of People",
      store: "Restaurant Name",
      storePlaceholder: "Restaurant Name",
      contact: "Contact Number",
      contactPlaceholder: "Your phone number",
      date1: "Preferred Date①",
      date2: "Preferred Date②",
      date3: "Preferred Date③",
      date1Placeholder: "Preferred Date①",
      date2Placeholder: "Preferred Date②",
      date3Placeholder: "Preferred Date③",
      address: "Address (Optional)",
      addressPlaceholder: "Address",
      notes: "Special Notes (Optional)",
      notesPlaceholder: "Allergies, etc.",
      payment: "Payment Method",
      paymentOptions: [
        "Credit Card",
        "PayPay",
        "auPay",
        "Pay at the restaurant",
      ],
      submit: "Reserve",
    },
    fr: {
      title: "Formulaire de réservation de restaurant",
      subtitle: "Veuillez entrer vos informations de réservation",
      name: "Nom",
      namePlaceholder: "Nom",
      people: "Nombre de personnes",
      peoplePlaceholder: "Nombre de personnes",
      store: "Nom du restaurant",
      storePlaceholder: "Nom du restaurant",
      contact: "Numéro de contact",
      contactPlaceholder: "Votre numéro de téléphone",
      date1: "Date préférée①",
      date2: "Date préférée②",
      date3: "Date préférée③",
      date1Placeholder: "Date préférée①",
      date2Placeholder: "Date préférée②",
      date3Placeholder: "Date préférée③",
      address: "Adresse (facultatif)",
      addressPlaceholder: "Adresse",
      notes: "Remarques spéciales (facultatif)",
      notesPlaceholder: "Allergies, etc.",
      payment: "Mode de paiement",
      paymentOptions: [
        "Carte de crédit",
        "PayPay",
        "auPay",
        "Paiement sur place",
      ],
      submit: "Réserver",
    },
  };

  // 言語選択時のイベント
  langOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const selectedLang = this.textContent.trim(); // 選択された言語
      let langCode = "ja"; // デフォルトは日本語
      if (selectedLang === "英語") langCode = "en";
      if (selectedLang === "フランス語") langCode = "fr";

      // テキストの更新
      textElements.title.textContent = translations[langCode].title;
      textElements.subtitle.textContent = translations[langCode].subtitle;
      textElements.name.textContent = translations[langCode].name;
      textElements.namePlaceholder.setAttribute(
        "placeholder",
        translations[langCode].namePlaceholder
      );
      textElements.people.textContent = translations[langCode].people;
      textElements.peoplePlaceholder.setAttribute(
        "placeholder",
        translations[langCode].peoplePlaceholder
      );
      textElements.store.textContent = translations[langCode].store;
      textElements.storePlaceholder.setAttribute(
        "placeholder",
        translations[langCode].storePlaceholder
      );
      textElements.contact.textContent = translations[langCode].contact;
      textElements.contactPlaceholder.setAttribute(
        "placeholder",
        translations[langCode].contactPlaceholder
      );
      textElements.date1.textContent = translations[langCode].date1;
      textElements.date2.textContent = translations[langCode].date2;
      textElements.date3.textContent = translations[langCode].date3;
      textElements.date1Placeholder.setAttribute(
        "placeholder",
        translations[langCode].date1Placeholder
      );
      textElements.date2Placeholder.setAttribute(
        "placeholder",
        translations[langCode].date2Placeholder
      );
      textElements.date3Placeholder.setAttribute(
        "placeholder",
        translations[langCode].date3Placeholder
      );
      textElements.address.textContent = translations[langCode].address;
      textElements.addressPlaceholder.setAttribute(
        "placeholder",
        translations[langCode].addressPlaceholder
      );
      textElements.notes.textContent = translations[langCode].notes;
      textElements.notesPlaceholder.setAttribute(
        "placeholder",
        translations[langCode].notesPlaceholder
      );
      textElements.payment.textContent = translations[langCode].payment;
      textElements.submit.value = translations[langCode].submit;

      // 決済方法のオプションを更新
      const paymentOptions = translations[langCode].paymentOptions;
      textElements.paymentOptions.forEach((option, index) => {
        option.textContent = paymentOptions[index] || "";
      });
    });
  });
});

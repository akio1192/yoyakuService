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
  const kinkyuHeaders = document.querySelectorAll(".kinkyuRenraku h3");
  const kinkyuParagraphs = document.querySelectorAll(".kinkyuRenraku p");
  const textElements = {
    title: document.querySelector("h1"),
    subtitle: document.querySelector("h3"),
    name: document.querySelector("label[for='name']"),
    namePlaceholder: document.getElementById("name"),
    notes: document.querySelector("label[for='notes']"),
    notesPlaceholder: document.getElementById("notes"),
    email: document.querySelector("label[for='email']"),
    emailPlaceholder: document.getElementById("email"),
    urgent: document.getElementById("renraku"),
    hours: kinkyuHeaders[0],
    responseTime: kinkyuParagraphs[0],
    language: kinkyuHeaders[1],
    languageValue: kinkyuParagraphs[1],
    contact: kinkyuHeaders[2],
    submit: kinkyuParagraphs[2],
  };

  // 言語ごとの翻訳データ
  const translations = {
    ja: {
      title: "問い合わせ",
      subtitle: "問い合わせ情報を入力してください",
      name: "名前",
      namePlaceholder: "名前",
      notes: "お問い合わせ内容",
      notesPlaceholder: "お問い合わせ内容",
      email: "メールアドレス",
      emailPlaceholder: "メールアドレス",
      submit: "お問い合わせ",
      urgent: "お急ぎの方はこちらにご連絡を！",
      hours: "対応時間：",
      responseTime: "随時対応（※1日以内にご返信いたします。）",
      language: "対応言語：",
      languageValue: "英語",
      contact: "連絡先：",
    },
    en: {
      title: "Contact Us",
      subtitle: "Please enter your inquiry details",
      name: "Name",
      namePlaceholder: "Name",
      notes: "Inquiry Details",
      notesPlaceholder: "Enter your inquiry details",
      email: "Email Address",
      emailPlaceholder: "Email Address",
      submit: "Submit Inquiry",
      urgent: "For urgent inquiries, please contact us!",
      hours: "Business Hours:",
      responseTime: "Available anytime (We will respond within 1 day.)",
      language: "Languages Supported:",
      languageValue: "English",
      contact: "Contact:",
    },
    fr: {
      title: "Nous contacter",
      subtitle: "Veuillez entrer les détails de votre demande",
      name: "Nom",
      namePlaceholder: "Nom",
      notes: "Détails de la demande",
      notesPlaceholder: "Entrez les détails de votre demande",
      email: "Adresse e-mail",
      emailPlaceholder: "Adresse e-mail",
      submit: "Envoyer la demande",
      urgent: "Pour les demandes urgentes, contactez-nous!",
      hours: "Heures de service:",
      responseTime: "Réponse rapide (※sous 24 heures)",
      language: "Langues prises en charge :",
      languageValue: "Anglais",
      contact: "Contact :",
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
      textElements.notes.textContent = translations[langCode].notes;
      textElements.notesPlaceholder.setAttribute(
        "placeholder",
        translations[langCode].notesPlaceholder
      );
      textElements.email.textContent = translations[langCode].email;
      textElements.emailPlaceholder.setAttribute(
        "placeholder",
        translations[langCode].emailPlaceholder
      );
      textElements.urgent.textContent = translations[langCode].urgent;
      textElements.hours.textContent = translations[langCode].hours;
      textElements.responseTime.textContent =
        translations[langCode].responseTime;
      textElements.language.textContent = translations[langCode].language;
      textElements.languageValue.textContent =
        translations[langCode].languageValue;
      textElements.contact.textContent = translations[langCode].contact;
      textElements.submit.value = translations[langCode].submit;
    });
  });
});

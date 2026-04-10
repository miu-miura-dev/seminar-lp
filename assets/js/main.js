// =========================
// ハンバーガーメニュー
// =========================
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");

if (hamburger && menu && closeBtn) {

  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });

}

// =========================
// FAQトグル
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-item__question");

    question.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
});


// =========================
// 
// =========================
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const name = form.elements["name"];
    const email = form.elements["email"];

    clearErrors();

    if (!name.value.trim()) {
      showError(name, "名前を入力してください");
      isValid = false;
    }

    if (!email.value.trim()) {
      showError(email, "メールアドレスを入力してください");
      isValid = false;
    } else if (!isEmail(email.value)) {
      showError(email, "正しいメール形式で入力してください");
      isValid = false;
    }

    if (isValid) {
      window.location.href = "thanks.html";
    }
  });
}

// エラー表示
function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
  input.classList.add("error");
}

// エラー初期化
function clearErrors() {
  const errors = document.querySelectorAll(".error-message");
  errors.forEach(el => el.textContent = "");

  const inputs = document.querySelectorAll(".contact-form__input");
  inputs.forEach(el => el.classList.remove("error"));
}

// メール形式チェック
function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
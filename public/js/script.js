const tabs = document.querySelectorAll(".tab");
const forms = document.querySelectorAll(".form-container");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    forms.forEach((f) => f.classList.remove("active"));

    tab.classList.add("active");
    const formId = tab.getAttribute("data-tab");
    document.getElementById(formId).classList.add("active");
  });
});
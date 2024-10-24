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

document
  .getElementById("create-rule-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const ruleName = document.getElementById("ruleName").value;
    const ruleString = document.getElementById("ruleString").value;
    const response = await fetch("/api/rules/create_rule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ruleName, ruleString }),
    });
    const result = await response.json();
    console.log(result);
  });

// combine
document
  .getElementById("combine-rules-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const op = document.getElementById("operator1").value;
    const rules = Array.from(
      document.querySelectorAll('input[id^="combine-rule"]')
    ).map((input) => input.value);
    const response = await fetch("/api/rules/combine_rules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rules, op }),
    });
    const result = await response.json();
    console.log(result);
    
  });

// evaluate
document
  .getElementById("evaluate-rule-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const ast = document.getElementById("evaluate-ast").value;
    const data = document.getElementById("evaluate-data").value;
    const response = await fetch("/api/rules/evaluate_rule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ast, data: JSON.parse(data) }),
    });
    const result = await response.json();
     console.log(result);
  });

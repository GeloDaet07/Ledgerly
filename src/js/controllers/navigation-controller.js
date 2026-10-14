export function navigationController() {
  const addTransactionButton = document.getElementById("add-transaction-btn");
  const navButton = document.querySelectorAll(".nav-btn");
  const allSections = document.querySelectorAll("section");

  navButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      const clickedNavButton = event.currentTarget;
      const targetSectionId = clickedNavButton.dataset.target;

      navButton.forEach((btn) => btn.classList.remove("active"));
      clickedNavButton.classList.add("active");

      const targetSection = document.getElementById(targetSectionId);
      allSections.forEach((section) => section.classList.add("hidden"));
      targetSection.classList.remove("hidden");
    });
  });

  addTransactionButton.addEventListener("click", () => {
    const transactionFormSection = document.getElementById(
      "transaction-form-section",
    );
    openTransaction();
  });
}

export function openTransaction() {
  const allSections = document.querySelectorAll("section");
  const navButton = document.querySelectorAll(".nav-btn");
  const transactionFormSection = document.getElementById(
    "transaction-form-section",
  );

  allSections.forEach((section) => section.classList.add("hidden"));
  transactionFormSection.classList.remove("hidden");
  navButton.forEach((btn) => btn.classList.remove("active"));
}

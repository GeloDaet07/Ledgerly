export function navigationController() {
  const addTransactionButton = document.getElementById('add-transaction-btn');
  const navButton = document.querySelectorAll('.nav-btn');
  const allSections = document.querySelectorAll('section');
  
  navButton.forEach(button => {
    button.addEventListener('click', (event) => {
      const clickedNavButton = event.currentTarget;
      const targetSectionId = clickedNavButton.dataset.target;

      //Loops all nav buttons to only assign the clicked button the active class
      navButton.forEach(btn => btn.classList.remove('active'));
      clickedNavButton.classList.add('active');
      
      //Targets the section that corresponds to the clicked button and hides all other sections
      const targetSection = document.getElementById(targetSectionId);
      allSections.forEach(section => section.classList.add('hidden'));
      targetSection.classList.remove('hidden');
    });
  });

  addTransactionButton.addEventListener('click', () => {
    // Show the transaction form section and hide all other sections
    const transactionFormSection = document.getElementById('transaction-form-section');
    openTransaction();
  });
}

export function openTransaction(){
  const allSections = document.querySelectorAll('section');
        const navButton = document.querySelectorAll('.nav-btn');
        const transactionFormSection = document.getElementById('transaction-form-section');
    
        //Only show the form
        allSections.forEach(section => section.classList.add('hidden'));
        transactionFormSection.classList.remove('hidden');
        navButton.forEach(btn => btn.classList.remove('active'));
}
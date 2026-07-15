export function navigationController() {
  const navButton = document.querySelectorAll('.nav-btn');
  const allSections = document.querySelectorAll('section');

  navButton.forEach(button => {
    button.addEventListener('click', (event) => {
      const clickedNavButton = event.currentTarget;
      const targetSectionId = clickedNavButton.dataset.target;

      //Loops all nav buttons to only assign the clickedf button the active class
      navButton.forEach(btn => btn.classList.remove('active'));
      clickedNavButton.classList.add('active');
      
      //Targets the section that corresponds to the clicked button and hides all other sections
      const targetSection = document.getElementById(targetSectionId);
      allSections.forEach(section => section.classList.add('hidden'));
      targetSection.classList.remove('hidden');
    });
  });
}
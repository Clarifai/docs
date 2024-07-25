document.addEventListener('DOMContentLoaded', () => {
  // Add global click event listener for 'dropdown__link' elements
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('dropdown__link')) {
      const clickedHref = event.target.getAttribute('href');
      const sidebarItems = document.querySelectorAll('.menu__link--active');
      const targetItem = Array.from(sidebarItems).find((item) => item.getAttribute('href') === clickedHref || item.getAttribute('href') === clickedHref + '/');
      if (targetItem) {
        targetItem.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    }
  });
});
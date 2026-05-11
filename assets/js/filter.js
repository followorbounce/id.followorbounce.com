(() => {
  'use strict';

  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.pf-card');

  const emptyState = document.getElementById('pf-empty');
  const counter = document.getElementById('project-count');

  function updateCounter(value) {
    counter.textContent =
      `${value} ${value === 1 ? 'Project' : 'Projects'}`;
  }

  function filterProjects(category) {

    let visible = 0;

    cards.forEach((card) => {

      const cardCategory = card.dataset.category;

      const show =
        category === 'all' ||
        cardCategory === category;

      card.classList.toggle('is-hidden', !show);

      if (show) visible++;
    });

    emptyState.style.display =
      visible === 0 ? 'flex' : 'none';

    updateCounter(visible);
  }

  buttons.forEach((button) => {

    button.addEventListener('click', () => {

      buttons.forEach((btn) => {
        btn.classList.remove('is-active');
      });

      button.classList.add('is-active');

      filterProjects(button.dataset.filter);

    });

  });

})();

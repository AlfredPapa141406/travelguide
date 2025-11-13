document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  const regionSelect = document.querySelector('#regionFilter');
  const destinationCards = Array.from(
    document.querySelectorAll('.destination-card[data-region]')
  );

  const showRegion = (region) => {
    destinationCards.forEach(card => {
      const cardRegion = card.dataset.region ?? 'all';
      const shouldShow = region === 'all' || cardRegion === region;
      card.hidden = !shouldShow;
    });

    if (region !== 'all') {
      document.getElementById('destinations')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (regionSelect) {
    showRegion(regionSelect.value || 'all');

    regionSelect.addEventListener('change', () => {
      showRegion(regionSelect.value || 'all');
    });
  } else {
    showRegion('all');
  }
});



// Update the JavaScript to handle all .read-more-link smooth scrolling
document.querySelectorAll('.read-more-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  document.querySelector('.learn-more-button').addEventListener('click', function (e) {
    e.preventDefault();
    const learnMoreSection = document.querySelector(this.getAttribute('href'));
    learnMoreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  
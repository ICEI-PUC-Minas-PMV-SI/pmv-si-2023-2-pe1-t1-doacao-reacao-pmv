let hasScrolledDown = false;

const handleScroll = () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100 && !hasScrolledDown) {
    hasScrolledDown = true;
    document.getElementById('navigation-bar').classList.add('sticky');
    return;
  }

  if (scrollPosition <= 100 && hasScrolledDown) {
    document.getElementById('navigation-bar').classList.remove('sticky');
    hasScrolledDown = false;
    return;
  }
};

window.addEventListener('scroll', handleScroll);

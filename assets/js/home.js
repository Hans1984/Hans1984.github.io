(() => {
  const toggle = document.querySelector('.theme-toggle');
  const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === 'dark' : colorScheme.matches;
  const updateToggle = () => toggle.setAttribute('aria-label', `Switch to ${isDark() ? 'light' : 'dark'} theme`);
  if (toggle) {
    toggle.hidden = false;
    updateToggle();
    colorScheme.addEventListener('change', updateToggle);
    toggle.addEventListener('click', () => {
      const theme = isDark() ? 'light' : 'dark';
      document.documentElement.dataset.theme = theme;
      try { localStorage.setItem('chao-theme', theme); } catch (_) {}
      updateToggle();
    });
  }
  // Keep development and preview visits out of production statistics.
  const canonical = document.querySelector('link[rel="canonical"]');
  const isProduction = canonical && location.hostname === new URL(canonical.href).hostname;
  const counter = document.querySelector('[data-counter-src]');
  if (counter && isProduction) {
    counter.addEventListener('error', () => {
      counter.hidden = true;
      const note = document.querySelector('.counter-preview-note');
      note.textContent = 'The visitor counter is currently unavailable. You can still open the detailed statistics.';
      note.hidden = false;
    });
    counter.src = counter.dataset.counterSrc;
  } else if (counter) {
    counter.hidden = true;
    document.querySelector('.counter-preview-note').hidden = false;
  }
})();

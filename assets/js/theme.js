// Apply a saved preference before paint; private browsing may block storage.
try {
  var savedTheme = localStorage.getItem('chao-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') document.documentElement.dataset.theme = savedTheme;
} catch (_) {}

function applySeasonalTheme() {
  var today = new Date();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var seasonClass = 'season-normale';
  
  if (month === 12 && day >= 8) {
    seasonClass = 'season-natale';
  }
  if (month === 1 && day <= 6) {
    seasonClass = 'season-natale';
  }
  if (month === 10 && day >= 25) {
    seasonClass = 'season-halloween';
  }
  if (month === 3 && day === 17) {
    seasonClass = 'season-sanpatrizio';
  }
  
  document.body.classList.remove('season-normale');
  document.body.classList.remove('season-natale');
  document.body.classList.remove('season-halloween');
  document.body.classList.remove('season-sanpatrizio');
  document.body.classList.add(seasonClass);
}

function applyDisplayTheme(themeName) {
  document.body.classList.remove('theme-light');
  document.body.classList.remove('theme-dark');
  document.body.classList.remove('theme-sepia');
  document.body.classList.add('theme-' + themeName);
  localStorage.setItem('preferredDisplayTheme', themeName);
  
  document.getElementById('temaLight').classList.remove('active');
  document.getElementById('temaDark').classList.remove('active');
  document.getElementById('temaSepia').classList.remove('active');
  document.getElementById('themeLight').classList.remove('active');
  document.getElementById('themeDark').classList.remove('active');
  document.getElementById('themeSepia').classList.remove('active');

  if (themeName == 'light') {
    document.getElementById('temaLight').classList.add('active');
    document.getElementById('themeLight').classList.add('active');
  }
  if (themeName == 'dark') {
    document.getElementById('temaDark').classList.add('active');
    document.getElementById('themeDark').classList.add('active');
  }
  if (themeName == 'sepia') {
    document.getElementById('temaSepia').classList.add('active');
    document.getElementById('themeSepia').classList.add('active');
  }
}

function initDisplayTheme() {
  if (localStorage.getItem('preferredDisplayTheme') == 'light') {
    document.body.classList.add('theme-light');
    document.getElementById('temaLight').classList.add('active');
    document.getElementById('themeLight').classList.add('active');
  }
  if (localStorage.getItem('preferredDisplayTheme') == 'dark') {
    document.body.classList.add('theme-dark');
    document.getElementById('temaDark').classList.add('active');
    document.getElementById('themeDark').classList.add('active');
  }
  if (localStorage.getItem('preferredDisplayTheme') == 'sepia') {
    document.body.classList.add('theme-sepia');
    document.getElementById('temaSepia').classList.add('active');
    document.getElementById('themeSepia').classList.add('active');
  }
  if (localStorage.getItem('preferredDisplayTheme') == null) {
    document.body.classList.add('theme-light');
    document.getElementById('temaLight').classList.add('active');
    document.getElementById('themeLight').classList.add('active');
  }
}

function initLang() {
  if (window.location.pathname.includes('/Eng/')) {
    document.getElementById('langItDesktop').classList.remove('active');
    document.getElementById('langEnDesktop').classList.add('active');
    document.getElementById('langItMobile').classList.remove('active');
    document.getElementById('langEnMobile').classList.add('active');
  }
  
  if (window.location.pathname.includes('/Ita/')) {
    document.getElementById('langItDesktop').classList.add('active');
    document.getElementById('langEnDesktop').classList.remove('active');
    document.getElementById('langItMobile').classList.add('active');
    document.getElementById('langEnMobile').classList.remove('active');
  }
}

function switchToItalian() {
  if (window.location.pathname.includes('/Eng/')) {
    localStorage.setItem('preferredLang', 'it');
    window.location.href = window.location.pathname.replace('/Eng/', '/Ita/');
  }
}

function switchToEnglish() {
  if (window.location.pathname.includes('/Ita/')) {
    localStorage.setItem('preferredLang', 'en');
    window.location.href = window.location.pathname.replace('/Ita/', '/Eng/');
  }
}

function toggleMobileMenu() {
  if (document.getElementById('mobileMenu').classList.contains('open')) {
    document.getElementById('mobileMenu').classList.remove('open');
  } else {
    document.getElementById('mobileMenu').classList.add('open');
  }
}

function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

window.onload = function() {
  applySeasonalTheme();
  initDisplayTheme();
  initLang();
};
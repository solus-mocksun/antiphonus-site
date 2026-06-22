(function () {
  const NAV = [
    { id: 'overview',   label: 'overview',   path: 'index.html' },
    { id: 'game',       label: 'game',        path: 'game/index.html' },
    { id: 'story',      label: 'story',       path: 'story/page.html' },
    { id: 'gallery',    label: 'gallery',     path: 'gallery/index.html' },
    { id: 'world',      label: 'world',       path: 'world/index.html' },
  ];

  window.injectNav = function (activeId, root) {
    root = root || '';
    const items = NAV.map(function (item) {
      var cls = item.id === activeId ? ' class="active"' : '';
      return '<li><a href="' + root + item.path + '"' + cls + '>' + item.label + '</a></li>';
    }).join('');

    var el = document.createElement('header');
    el.className = 'site-header';
    el.innerHTML =
      '<a href="' + root + 'index.html" class="header-logo">After all, tomorrow is another day</a>' +
      '<nav><ul class="header-nav">' + items + '</ul></nav>' +
      '<span class="nav-indicator"></span>';

    document.body.insertBefore(el, document.body.firstChild);
    _initIndicator(el);
  };

  window.injectFooter = function (container) {
    var el = document.createElement('footer');
    el.className = 'site-footer';
    el.innerHTML =
      '<div class="footer-wip">' +
        '<div class="wip-dot"></div>' +
        '<span>work in progress · last updated: <span class="footer-lastmod"></span></span>' +
      '</div>' +
      '<span>© All rights reserved. 2023–<span class="footer-yr"></span> / solus.mocksun</span>';

    (container || document.body).appendChild(el);

    el.querySelector('.footer-yr').textContent = new Date().getFullYear();
    var d = new Date(document.lastModified);
    var pad = function (n) { return String(n).padStart(2, '0'); };
    el.querySelector('.footer-lastmod').textContent = isNaN(d)
      ? '—'
      : d.getFullYear() + ' ' +
        pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' +
        pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  };

  window.initNavIndicator = _initIndicator;

  function _initIndicator(header) {
    var indicator = header.querySelector('.nav-indicator');
    var links     = header.querySelectorAll('.header-nav a');
    var active    = header.querySelector('.header-nav a.active');
    var cur = { left: 0, width: 0 };
    var timer;

    function setInstant(link) {
      if (!link) return;
      var hr = header.getBoundingClientRect();
      var lr = link.getBoundingClientRect();
      indicator.style.transition = 'none';
      indicator.style.left  = (lr.left - hr.left) + 'px';
      indicator.style.width = lr.width + 'px';
      indicator.style.opacity = '1';
      cur.left  = lr.left - hr.left;
      cur.width = lr.width;
    }

    function move(link) {
      if (!link) { indicator.style.opacity = '0'; return; }
      var hr = header.getBoundingClientRect();
      var lr = link.getBoundingClientRect();
      var tLeft  = lr.left - hr.left;
      var tWidth = lr.width;

      clearTimeout(timer);
      indicator.style.transition = 'left 0.15s ease-out, width 0.12s ease-out, opacity 0.12s';
      indicator.style.opacity = '1';
      indicator.style.left  = tLeft + 'px';
      indicator.style.width = tWidth + 'px';
      cur.left  = tLeft;
      cur.width = tWidth;
    }

    document.fonts.ready.then(function () { setInstant(active); });

    links.forEach(function (a) {
      a.addEventListener('mouseenter', function () { move(a); });
    });
    header.querySelector('.header-nav').addEventListener('mouseleave', function () { move(active); });
  }
})();

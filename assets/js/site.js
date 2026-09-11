/* Solera Polo · small behaviours. No frameworks, no tracking. */
(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var body = document.body;

  /* Header: cream backdrop once the page has scrolled past the hero's top edge. */
  function onScroll() {
    if (window.scrollY > 24) { header.classList.add('scrolled'); }
    else { header.classList.remove('scrolled'); }
  }
  if (header) {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Phone menu. */
  var button = document.getElementById('menu-button');
  var menu = document.getElementById('menu');
  if (button && menu) {
    button.addEventListener('click', function () {
      var open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', open ? 'false' : 'true');
      menu.hidden = open;
      body.classList.toggle('menu-open', !open);
      button.querySelector('.menu-label').textContent = open ? 'Menu' : 'Close';
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { button.click(); }
    });
  }

  /* Photos: colour on hover on desktops; on touch screens, colour as they scroll into view.
     A fallback timer reveals everything if IntersectionObserver never fires. */
  var photos = document.querySelectorAll('.photo');
  var noHover = window.matchMedia('(hover: none)').matches;
  if (noHover && photos.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in-view'); io.unobserve(en.target); }
        });
      }, { threshold: 0.45 });
      photos.forEach(function (p) { io.observe(p); });
      setTimeout(function () { photos.forEach(function (p) { p.classList.add('in-view'); }); }, 2500);
    } else {
      photos.forEach(function (p) { p.classList.add('in-view'); });
    }
  }

  /* Carousel of pictures: the arrows scroll the track by one picture. Touch and trackpad just swipe. */
  document.querySelectorAll('.carousel').forEach(function (c) {
    var track = c.querySelector('.carousel-track');
    var step = function () { var first = track.querySelector('.slide'); return first ? first.getBoundingClientRect().width + 14 : 400; };
    var prev = c.querySelector('.carousel-prev'), next = c.querySelector('.carousel-next');
    if (prev) { prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); }); }
    if (next) { next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); }); }
  });

  /* Contact form: pre select the topic from the address, e.g. /contact/?topic=rental,
     and put it in the email subject so the inbox shows what the person wants. */
  var topic = document.getElementById('f-topic');
  var subject = document.getElementById('form-subject');
  if (topic) {
    var params = new URLSearchParams(window.location.search);
    var wanted = params.get('topic');
    if (wanted) {
      for (var i = 0; i < topic.options.length; i++) {
        if (topic.options[i].value === wanted) { topic.selectedIndex = i; break; }
      }
    }
    function setSubject() {
      var label = topic.options[topic.selectedIndex] ? topic.options[topic.selectedIndex].text : '';
      if (subject) { subject.value = topic.value ? 'Solera Polo enquiry · ' + label : 'Solera Polo enquiry'; }
    }
    topic.addEventListener('change', setSubject);
    setSubject();
  }
})();

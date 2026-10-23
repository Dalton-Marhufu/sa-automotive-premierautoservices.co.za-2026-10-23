// Premier Auto Services - interactions
document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  // Sticky header shadow
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Mobile nav
  navToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { nav.classList.remove('open'); });
  });

  // Reveal on scroll
  var revealTargets = document.querySelectorAll('.card, .about__media, .about__text, .gm__text, .gm__logos, .section__head, .cta-band__inner, .contact__info, .contact__form');
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(function (el) { io.observe(el); });

  // Lightbox
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  document.querySelectorAll('.gallery__item').forEach(function (item) {
    item.addEventListener('click', function () {
      var bg = item.style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
      lightboxImg.src = bg;
      lightbox.classList.add('open');
    });
  });
  function closeLb() { lightbox.classList.remove('open'); lightboxImg.src = ''; }
  lightboxClose.addEventListener('click', closeLb);
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLb(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });

  // Year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

function handleQuote(e) {
  e.preventDefault();
  var note = document.getElementById('formNote');
  note.textContent = 'Thanks! Your enquiry is ready - tap WhatsApp or email us and we will confirm your booking.';
  e.target.reset();
  return false;
}

'use strict'

/** Переключение табов */

const tabBtns = document.querySelectorAll('.tabs__btn-item');
const tabContens = document.querySelectorAll('.tabs__content-item');

tabBtns.forEach(elem => {
  elem.addEventListener('click', open);
});

function open(event) {
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;

  tabBtns.forEach(item => item.classList.remove('tabs__btn-item--active'));
  tabTarget.classList.add('tabs__btn-item--active');
  tabContens.forEach(item => {
    item.classList.remove('tabs__content-item--active');

    if (item.id === button) {
      item.classList.add('tabs__content-item--active');
    }

  });
}

/** Логика работы меню мобаил */

const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.header__menu');
menuBtn.addEventListener('click', toggle);

function toggle() {
  headerMenu.classList.toggle('active');
}

/**  Кастомный плавный скрол */

const menuLinkHeader = document.querySelectorAll('.header__menu-link');
const menuLinkFooter = document.querySelectorAll('.footer__menu-link');

const scrollToSection = (e) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');

  if (!href || !href.startsWith('#')) return;

  const section = href.slice(1);
  let top = document.getElementById(section)?.offsetTop || 0;
  top -= 50;
  window.scrollTo({ top, behavior: 'smooth' });
}

menuLinkHeader.forEach(link => link.addEventListener('click', scrollToSection));
menuLinkFooter.forEach(link => link.addEventListener('click', scrollToSection));

/** Анимация элементов */

const sections = document.querySelectorAll('.section');

const handleScroll = () => {
  const { scrollY: y, innerHeight: h } = window;
  sections.forEach(section => {
    if (y > section.offsetTop - h / 1.5) {
      section.classList.remove('hidden');
    }
  })
}

window.addEventListener('scroll', handleScroll);

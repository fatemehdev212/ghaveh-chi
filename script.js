const storySection = document.querySelector('.site-story');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
});

if (storySection) {
  observer.observe(storySection);
}

const backToTopBtn = document.querySelector('#backToTop');

window.addEventListener('scroll', () => {
    // اگه بیشتر از ۴۰۰ پیکسل اسکرول کرد، دکمه رو نشون بده
    if (window.pageYOffset > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // همون اسکرول نرم و باکلاس
    });
});

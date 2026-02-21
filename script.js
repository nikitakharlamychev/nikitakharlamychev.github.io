document.addEventListener('DOMContentLoaded', function () {
  // === Основные кнопки: Портфолио / Интересное / Контакты ===
  const actionButtons = document.querySelectorAll('.action-btn');
  actionButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const targetBlock = document.getElementById(targetId);
      if (!targetBlock) return;

      const currentlyVisible = document.querySelector('.content-block.visible, .contact-links.visible');
      if (currentlyVisible && currentlyVisible === targetBlock) {
        targetBlock.classList.remove('visible');
      } else {
        if (currentlyVisible) currentlyVisible.classList.remove('visible');
        targetBlock.classList.add('visible');
      }
    });
  });

  // === Кнопки внутри "Интересного" ===
  const interestingButtons = document.querySelectorAll('.interesting-btn');
  interestingButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const articleId = this.getAttribute('data-article');
      const article = document.getElementById(articleId);
      if (!article) return;

      const currentlyVisibleArticle = document.querySelector('.article.visible');
      if (currentlyVisibleArticle && currentlyVisibleArticle === article) {
        article.classList.remove('visible');
      } else {
        if (currentlyVisibleArticle) {
          currentlyVisibleArticle.classList.remove('visible');
        }
        article.classList.add('visible');
      }
    });
  });

  // === КАРУСЕЛЬ (теперь внутри DOMContentLoaded!) ===
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

if (slides.length > 0) {
  let currentIndex = 0;

  const showSlide = (index) => {
    // Убираем active у всех
    slides.forEach(slide => slide.classList.remove('active'));
    // Добавляем active новому
    slides[index].classList.add('active');
  };

  // Показываем первый слайд
  showSlide(currentIndex);

  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });
}
  // Мобильное портфолио: аккордеон
const mobileCategories = document.querySelectorAll('.portfolio-mobile-category');
mobileCategories.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    const items = document.querySelector(`.portfolio-mobile-items[data-category="${category}"]`);
    items.classList.toggle('active');
  });
});
});
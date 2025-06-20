const galleryItems = document.querySelectorAll('.gallery-item');
  const loadMoreBtn = document.querySelector('.gallery__button__load');
  const itemsPerPage = 6;
  let currentIndex = 0;

  function showNextItems() {
    const nextItems = Array.from(galleryItems).slice(currentIndex, currentIndex + itemsPerPage);
    nextItems.forEach(item => item.style.display = 'block');
    currentIndex += itemsPerPage;

    if (currentIndex >= galleryItems.length) {
      loadMoreBtn.style.display = 'none';
    }
}
  
  galleryItems.forEach(item => item.style.display = 'none');

  
  showNextItems();

  loadMoreBtn.addEventListener('click', showNextItems);
const images = [
  { id: 1, src: 'assets/image1.png', alt: 'Image 1' },
  { id: 2, src: 'assets/image2.png', alt: 'Image 2' },
  { id: 3, src: 'assets/image3.png', alt: 'Image 3' },
  { id: 4, src: 'assets/image4.png', alt: 'Image 4' }
];

const mainImage = document.getElementById('main-image');
const buttons = document.querySelectorAll('.other-images button');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    const image = images.find(img => img.id === parseInt(id));
    if (image) {
      mainImage.src = image.src;
      mainImage.alt = image.alt;
      mainImage.setAttribute('data-id', image.id);
    }
  });
});
const toggleButton = document.querySelector('.toggle-button');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const body = document.querySelector('body');
    if (body) {
const slideshowImages = document.querySelectorAll('.slideshow-image');
let currentImageIndex = 0;
if (slideshowImages.length > 0) {
  setInterval(() => {
    slideshowImages[currentImageIndex].classList.remove('visible');
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
    slideshowImages[currentImageIndex].classList.add('visible');
const modalButton = document.querySelector('.modal-button');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-modal-button');
if (modalButton && modal) {
  modalButton.addEventListener('click', () => {
    modal.classList.add('visible');
  });
}
if (closeModalButton && modal) {
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const name = nameInput ? nameInput.value : '';
    const email = emailInput ? emailInput.value : '';
    const message = messageInput ? messageInput.value : '';

    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Message: ${message}`)
  });
}onst nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  console.log(`Name: ${name}`)
  console.log(`Email: ${email}`)
  console.log(`Message: ${message}`)
});
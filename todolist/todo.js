const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const overlay = document.querySelector('.overlay');

openPopup.addEventListener('click', function() {
    popup.classList.add('active');
    overlay.classList.add('active');
});

closePopup.addEventListener('click', function() {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});



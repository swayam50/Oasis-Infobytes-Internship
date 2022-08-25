const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const quoteButton = document.querySelector('#quoteButton');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
});

quoteButton.addEventListener('click', function(e) {
    e.preventDefault();

    let quoteSpoken = document.querySelector('#quoteContainer p');
    let quoteGenius = document.querySelector('#quoteGenius');

    fetch("https://lotr-random-quote-api.herokuapp.com/api/quote")
        .then(response => response.json())
        .then(data => data)
        .then(data => {
            const { author, quote, image } = data;
            quoteSpoken.textContent = quote;
            quoteGenius.textContent = (`- ${author}`);
        })
        .catch(error => console.error(error));
});
// Basic form submit behavior
const subscribeForm = document.querySelector('.subscribe form');
subscribeForm?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for subscribing!');
});

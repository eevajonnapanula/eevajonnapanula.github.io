const navButton = document.querySelector('nav button')

navButton.addEventListener('click', function () {
  const expanded = this.getAttribute('aria-expanded') === 'true'
  this.setAttribute('aria-expanded', !expanded)
})
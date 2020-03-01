const navButton = document.querySelector('nav button')

navButton.addEventListener('click', function () {
  const expanded = this.getAttribute('aria-expanded') === 'true'
  this.setAttribute('aria-expanded', !expanded)
})

const themeCheck = document.getElementById('theme')

themeCheck.addEventListener('change', function (event) {
  event.target.checked ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
})